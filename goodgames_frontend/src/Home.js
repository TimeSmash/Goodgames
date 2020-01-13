// Is user logged in? If yes, display components, if no, redirec to login

import React, { Component } from 'react';
import AdBar from './AdBar'
//stealing adbar and header format from Games.css, eventually make css file for that crap
import "./Games.css"

class Home extends Component {
    state = {  }

    //Why does this be nothing at first
        
        
        //This is nothing at first because 
        showAmountOfUserThing = (thing) => {
            let objectKey = thing
        let userDetails = Object.assign({}, this.props.userDetails)
        if (userDetails[objectKey] !== undefined){
            return userDetails[objectKey].length
        }
        // if (this.props.userDetails.thing !== undefined){
        //     return this.props.userDetails.thing.length
        // }
        }

        componentDidMount(){
            this.setState({reviews: this.props.userDetails.reviews, games: this.props.userDetails.games})
        }

    render() {
        console.log("Home props userDetails", this.props.userDetails)
        console.log("Home state", this.state)
        return (

            //How should I get user details?
            //Since I have token, just call retrieve_user everywhere?
            <div>
            <div id="games-adbar-container"><AdBar/></div>
            <h1 id="games-heading">Welcome, {this.props.userDetails.name}!</h1>
            <div className = "news-container">
            <p>    
                <strong>Total Reviews: </strong>{this.showAmountOfUserThing("reviews")}
            </p>
            <p>    
                <strong>Total Games Played: </strong>{this.showAmountOfUserThing("games")}
            </p>
            <p>
               What are you doing on this boring home page? Let's explore this app!
            </p>
        </div>
        </div>
        );
    }
}

export default Home;

