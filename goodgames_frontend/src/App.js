import React, { Component } from 'react';
import './App.css';
import Signup from './Signup.js'
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Games from './Games';
import News from './News';
import Reviews from './Reviews';
import NavBar from './NavBar';
import Login from './Login';
import SpecificGame from './SpecificGame';
import GameCard from './GameCard';
import ReviewForm from './ReviewForm';
import PageNotFound from './PageNotFound'

import Footer from './Footer'
class App extends Component {

  state = {
          toSignup: false,
          gameToRedirectTo: 0,
          redirectToSpecificGame: false,
          gameToAdd: {},
          searchResults:[],
          user: {},
          toAbout: false,
          toGames:false,
          gameToReview: {},
          showLoadingIcon: false,
          showDefaultFooter: true,
          reviewToEdit: {}}
  
    //Signup page
  addNewUser = (event, user) => {
    //This adds a new user and also begins a login session
    console.log("addNewSUer props", this.props  )
    
    event.preventDefault()
    // console.log("Add this user", user)
    fetch("http://localhost:3010/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user: {name: user.name, email: user.email, password: user.password, birthday: user.birthday, genres: user.genres}})
    }).then(res => 
      // console.log("addNewUser fired")
      res.json())
      .then(json => {
        // This console.log should show user's name encrypted password and email and jwt token 
        console.log("returned from backend",json)
        this.setState({user: json.user})
        localStorage.setItem('token',json.jwt)
        this.props.history.push('/home')
      })
        //this triggers rerender, see componentDidMount
  } //end addNewUser

  login = (event,userCredentials) =>{
    //This begins a user login session
    event.preventDefault()
    console.log("login credentials used",userCredentials)
    fetch("http://localhost:3010/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: userCredentials.name,
        password: userCredentials.password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.invalid_message){
        alert("Invalid username/password combination. Please try again.")
      } else {
      console.log("data returned upon login",data)
      this.setState({user: data.details})  
      localStorage.setItem('token', data.jwt)
      this.props.history.push('/home')
      }
    })
    //compare user credentials (name, password) with data from backend (fetch, GET, ===)
    //If matches setState of user an localStorage redirect to home 
    //fetch
  }

  logout = () =>{
    let conf = window.confirm("This will log you out. Are you sure?")
    if (conf){
      console.log("They hit yes")
      localStorage.clear()
      this.props.history.push('/login')
    } else {
      console.log("They hit no")
    }
  }

  componentDidMount(){
    //This keeps user in their login session
    //look for token in localStorage to see if user exists in localStorage
    //If they do, then keep them logged in
    console.log("Component mounted")
    
    let token = localStorage.getItem('token')
    console.log("token", token)

    if (token && token!== "undefined") { //if token exists, get the user via GET req to url below, points to retrieve_user in users-controlller
       fetch("http://localhost:3010/retrieve_user",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${token}`
          }
      })
      .then(resp => resp.json())
      .then(user => {
        console.log("user from App cDM", user)
      this.setState({ user: user});
      // push to home
      })
      
      //User also needs to be remembered--When app remounts user id is fetched via token magic, but
      //if I go to different component it resets. How to solve?
    } else {
      this.props.history.push('/login')
    }
  }

  goToSpecificGame = (id) => {
    console.log("fired goToSpecificGame") 
      this.setState({gameToRedirectTo: id, redirectToSpecificGame: true})
  }

  goToEditReview=(gameToEdit,review) =>{
    console.log("goToEditReview gameToEdit", gameToEdit)
    console.log("goToEditReview review",  review)
    this.setState({gameToReview: gameToEdit, reviewToEdit: review})
    this.props.history.push('/reviewform')
    
  }

  //ADD A GAME VIA REVIW
    addToUserGames = (userId, game) => {
      console.log("game to add", game)
      console.log("userId", userId)
      this.setState({gameToAdd: game})
      let userAddsReview = window.confirm("Would you like to add a review? If not, one will be created for you to edit later!")
      if (userAddsReview){
        console.log("Add a review selected.  Going to review form.")
        this.setState({gameToReview: game})
        //The review is added in editReviewForm
        this.props.history.push('/reviewform')
      } else {
        this.setState({gameToReview: game})
        console.log("Blank review made.")
        //create a blank review
        fetch("http://localhost:3010/reviews", {
          method: 'POST', 
          headers: {'Content-Type' :'application/json'},
          body: JSON.stringify({
              headline: "",
              content: "",
              stars: 0,
              user_id: userId, 
              game_id: game.id
          })
        })
      }
  //see if a game exists via its idgb_id from the IDGB database
  // checkIfGameExistsViaId = (id) =>{
  //   if fetch(`http://localhost:3010/game/${id}`, {
  //     method: 'POST', 
  //     })
  // }
  // alert("You just added a game!")
    }

  resetSearchResults = () => {
    this.setState({searchResults: []})
  }

  
  

  
  
  renderRedirectToSpecificGame = () => {
    if (this.state.redirectToSpecificGame) {
     return <Redirect to="/specificgame" />
    }
  }

  revertRedirectToFalse = () =>{
    return this.setState({redirectToSpecificGame: false})
  }

  searchForGame = (event, searchTerm) => {
    // console.log("searchForGame fired")
    // console.log("Searching for ", searchTerm)<-- shows value of searchTerm arg
    event.preventDefault()
    this.setState({showLoadingIcon: true})
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    
    fetch(proxyUrl + `https://api-v3.igdb.com/games/?search=${searchTerm.split(" ").join("_")}&fields=id,name,platforms,cover.url,genres,summary&limit=50`, {
        method: 'POST', 
        headers: {'user-key' :'7b458661e9a9ab138a9fb73f52f5e52f',
        'Accept':'application/json'}
    })
      .then(res => res.json())
      .then(data => {
        console.log("Search fired. searchResults", data)
        this.setState({searchResults: data, showLoadingIcon: false, toGames: true})
        //] gameObj => {return <GameCard game={gameObj.name}/>
      })
      
      return <Redirect to='/games'/>
    }

    // redirector = (path) => {
    //   toPath = "to" + path[0].toUpperCase() + path.slice(1)
    //   if (this.state.toPath) {
    //     return <Redirect to = `/${path}` /> 
    //   } else 
    //    null
    // }
  hideDefaultFooter = () => {
    this.setState({showDefaultFooter: false})
  }

  unhideDefaultFooter = () => {
    this.setState({showDefaultFooter: true})
  }

  ifNotUndefinedReturnValue = (thing) => {
    if (thing === undefined){
      return "undefined"
    } else {
      return thing
      }
    }
  
    ifUserLoggedInRedirectToHome = () => {
      if (localStorage.getItem('token')){
        // return <Redirect to ='/home'/>
        return this.props.history.push('/home')
      }
    }

  render() {
    //This fires once, then again when cDM
    console.log("current state", this.state)
    return (
      <div className="App">
        {/* THrow a var in appState have NavBar depend on */}
          {localStorage.getItem('token')? <NavBar logout={this.logout}/> : null}
          
        {this.renderRedirectToSpecificGame()}
        {/* {this.state.toGames ? <Redirect to='/games'/> : null } */}
          <Switch>
            <Route exact path='/home' render={() => <Home userDetails={this.state.user} />} />
            <Route exact path="/signup" render={ () => 
              <Signup 
                addNewUser={this.addNewUser} 
                hideDefaultFooter={this.hideDefaultFooter} 
                unhideDefaultFooter={this.unhideDefaultFooter}
                ifUserLoggedInRedirectToHome = {this.ifUserLoggedInRedirectToHome}/>}/> 
            <Route path='/contact' component={Contact} />
            <Route path='/login' render={ () => 
              <Login login={this.login} 
                hideDefaultFooter={this.hideDefaultFooter} 
                unhideDefaultFooter={this.unhideDefaultFooter}
                ifUserLoggedInRedirectToHome = {this.ifUserLoggedInRedirectToHome}
                />}
            /> 
            <Route path='/about' component={About} />
            <Route path='/news' component={News} />
            <Route path='/reviews' render={() => <Reviews userDetails={this.state.user} goToEditReview={this.goToEditReview} />} />
            <Route path='/reviewform' render={() => <ReviewForm userDetails={this.state.user} gameToReview={this.state.gameToReview} reviewToEdit={this.state.reviewToEdit} />} />
            
            <Route path='/games' render={ () => 
                <Games 
                goToSpecificGame={this.goToSpecificGame} searchResults={this.state.searchResults}
                resetSearchResults={this.resetSearchResults} redirectToSpecificGame={this.state.redirectToSpecificGame}
                addToUserGames={this.addToUserGames} searchForGame={this.searchForGame} showLoadingIcon={this.state.showLoadingIcon}
                toSignup={this.state.toSignup} userDetails={this.state.user}
                />} 
            />
            
            <Route path='/specificgame' render={() => <SpecificGame revertRedirectToFalse={this.revertRedirectToFalse} gameToRedirectTo={this.state.gameToRedirectTo} />} />
            <Route component={PageNotFound}/>
          </Switch>
        
        {this.state.showDefaultFooter ? <Footer></Footer> : null}

      </div>
    );
  }

  
}

export default withRouter(App);
