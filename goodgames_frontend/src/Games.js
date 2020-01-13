// eslint-disable
import React, { Component } from 'react';
import GameCard from './GameCard';
import AdBar from './AdBar';
import SearchGameForm from './SearchGameForm';
import "./Games.css"
import "./RecentlyReviewed.css"
import RecentlyReviewed from './RecentlyReviewed.js'

// it receives the props from App: 
// searchResults: An array game objs with various parameters
// ifNotUndefinedReturnValue : a fxn that if data is undefined, returns string "undefined" if true. Else, returns data.
class Games extends Component {
    state = { toSpefGame: false }


    //the gameCards function looks at the searchResults prop (which changes dynamically everytime a search is fired from SearchForm)
    //It renders GameCards based on the searchResults
    gameCards = () => {
        return this.props.searchResults.length > 0 ? 
        this.props.searchResults.map(game => {
            return <GameCard key = {game.id} 
            game={game} 
            revertRedirectToSpefGameToFalse={this.props.revertRedirectToSpefGameToFalse} 
            addToUserGames={this.props.addToUserGames}  
            goToSpecificGame={this.props.goToSpecificGame}
            userDetails={this.props.userDetails}
            />
        })
        : <div>"No results found."</div> //[]
     } 


        componentDidMount(){
            // this.props.resetSearchResults()
            return this.props.toSignup? null : console.log("toSignUp is false")
        }

    render() {
        console.log("Games props",this.props)
        return (
            
            <div className="gameList" style={{"textAlign": "center"}}>
                <div id="games-adbar-container"><AdBar/></div>
                    <h1 id="games-heading">Games</h1>
                <div id="search-form-container"><SearchGameForm searchForGame={this.props.searchForGame}/></div>
                {this.props.showLoadingIcon? 
                <div id="loading-div"> <h2>Loading..</h2><img id="loading-gif-games" src ="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif" alt="loaing"></img></div> 
                :    this.gameCards()}
                {/* <RecentlyReviewed></RecentlyReviewed> */}
            </div>   
        )
    }
}

export default Games;