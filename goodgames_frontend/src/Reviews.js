import React, { Component } from 'react';
import AdBar from './AdBar'
import ReviewCard from './ReviewCard'
import RecentlyReviewed from './RecentlyReviewed.js'
//stealing adbar and header format from Games.css, eventually make css file for that crap
import "./Games.css"



class Reviews extends Component {
    state = {reviews: [],
        showLoadingIcon: true }

        componentDidMount(){
            if (this.state.reviews.length === 0 && this.props.userDetails.id){
                //fetch("http://localhost:3010/reviews/user_reviews/7") instead of 7, user id
             console.log("Reviews props", this.props)
             console.log("Reviews User id", this.props.userDetails.id)
             // if (this.props.UserDetails !== undefined){
                 fetch(`http://localhost:3010/reviews/user_reviews/${this.props.userDetails.id}`)
                .then(res => res.json())
                .then(json => {
                    console.log("user reviews",json)
                     this.setState({reviews: json, showLoadingIcon: false})
                 })
                     // this.setState({reviews: this.props.userDetails.reviews})
                 console.log("Hi")
                //  window.location.reload();
             // } 
            }
            }

    componentDidUpdate(){
        //if there are no review and a user id exists
        if (this.state.reviews.length === 0 && this.props.userDetails.id){
           //fetch("http://localhost:3010/reviews/user_reviews/7") instead of 7, user id
        console.log("Reviews props", this.props)
        console.log("Reviews User id", this.props.userDetails.id)
        // if (this.props.UserDetails !== undefined){
            fetch(`http://localhost:3010/reviews/user_reviews/${this.props.userDetails.id}`)
           .then(res => res.json())
           .then(json => {
               console.log("user reviews",json)
                this.setState({reviews: json, showLoadingIcon: false})
            })
                // this.setState({reviews: this.props.userDetails.reviews})
            console.log("Hi")
        // } 
        }
        
    }

    reviewCards = () => {
        if (this.state.reviews.length){
            return this.state.reviews.map(review => <ReviewCard  goToEditReview={this.props.goToEditReview} gameReview={review}/>)
        } 
    }

    // componentDidUpdate(){
    //     this.reviewCards()
    // }

   render() { 
       console.log("Reviews state",this.state)
       
    return(   
    <div>
     {this.state.showLoadingIcon? <div> <h2>Loading..</h2><img id="loading-gif" src ="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif"></img></div>
     :
    <div>

            <div id="games-adbar-container">
                <AdBar></AdBar>
            </div>
            <h1 id="games-heading">Reviews</h1>
            <div className = "reviews-container">
                {/* UPON REFERESH OF REVIEWS THEY DON'T POP UP NOT SURE WHY */}
                {/* {this.state.reviews.length !== undefined ?  this.reviewCards() : <h1>No Reviews. Go make some!</h1>} */}
                <RecentlyReviewed></RecentlyReviewed>
            {this.reviewCards()}
            </div>
        </div>
    }
    </div>
    )
   
}
};
    
//This works saave here for a sec
// fetch(`http://localhost:3010/reviews/user_reviews/7`)
//            .then(res => res.json())
//            .then(json => {console.log("reviews",json)
//             this.setState({reviews: json})
//             }

export default Reviews;