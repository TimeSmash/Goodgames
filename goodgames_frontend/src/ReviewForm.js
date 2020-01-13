import React, { Component } from 'react';
import "./ReviewForm.css"
import "./Games.css"
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import Select from 'react-select';

import AdBar from './AdBar';
class ReviewForm extends Component {
    state = { headline: "",
              content: "",
              stars: 0,
              toEdit: true }

     starList = [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 }
    ];

    changeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    changeHandlerStars = (stars) => {
        this.setState({stars})
    }

    //SUBMIT //SUBMIT //SUBMIT //SUBMIT //SUBMIT //SUBMIT //SUBMIT //SUBMIT //SUBMIT //SUBMIT //SUBMIT 
    
    editOrAddReview = (event,review) =>{
        //review being this.state
        event.preventDefault()
        console.log("editOrAddReview fired")
        console.log("editOrAddReview review",review)
        console.log("editOrAddReview gameToReivew",this.props.gameToReview)
        // debugger
        // if review already exists, then edit it, if it doesn't then create one
        //look at user_reviews
        fetch("http://localhost:3010/does_review_exist",{
            method: "POST",
            headers:{"Content-Type": "application/json",
                    Accept:"application/json"},
            body:JSON.stringify({
                user_id: this.props.userDetails.id,
                game_id: this.props.gameToReview.id
            })
        })
        .then(res => res.json())
        .then(json =>{
            console.log(json)
            // debugger
            if(json.message === "It exists."){
                // But review(this.state) doesn't have id, so get it from json
                let reviewToEditId = json.reviewToEdit.id
                return this.editReview(reviewToEditId,review)
            } else {
                return this.addReview(review)
            }
        })
    }


    addReview =(review) =>{
        console.log("addReview fired",review)
        fetch("http://localhost:3010/reviews", {
                method: 'POST', 
                headers: {'Content-Type' :'application/json'},
                // This gets sent over as params
                body: JSON.stringify({
                    headline: review.headline,
                    content: review.content,
                    stars: review.stars.value,
                    user_id: this.props.userDetails.id,
                    game_id: this.props.gameToReview.id
                })
            })
        // this.props.history.push('/reviews')
    }
    
    editReview = (id,review) => {
        
        console.log("editReview's review details", review)
        console.log("editReview's id", id)
        // debugger
        fetch(`http://localhost:3010/reviews/edit_review/${id}`, {
            method: "PATCH",
            headers: {'Content-Type' :'application/json'},
            body: JSON.stringify({
                id: review.id,
                headline: review.headline,
                content: review.content,
                stars: review.stars.value
            })
        }).then(res => res.json()).then(json => console.log(json))
        //when review completed, either jump to that specific review or reviews page
        this.props.history.push('/reviews')
    }

    ifNoGamePropRedirectToGames = () => {
        if (this.props.gameToReview === undefined || this.props.gameToReview === {}) {
            this.props.history.push('/games')
            // return <Redirect to = '/games'/>
        }
    }

    render() {
        console.log("ReviewForm props", this.props)
        // console.log("Review Id", this.props.gameToReview.id)
        const {stars} = this.state.stars
        // this.ifNoGamePropRedirectToGames()
        return (
            <div id="review-form-container">
            <div id="games-adbar-container"><AdBar/></div>
            
            <h1 id="review-heading">You have chosen to add a review for
             <br></br>
             {this.props.gameToReview.name}</h1>
             <form id="review-form" onSubmit={(event) => {this.editOrAddReview(event,this.state)}}>
                 <span>Please type the headline of this review</span>
                 <input name="headline" value={this.state.headline} onChange={this.changeHandler}></input>
                 <br></br>
                 <br></br>
                 Please type what you thought about the game
                 <br></br>
                 <textarea name="content" value={this.state.content} onChange={this.changeHandler} ></textarea>
                 <br></br>
                 <br></br>
                 <div id="select-container">Please give a rating from 1-5<Select name="stars" value={stars} options={this.starList}  onChange={this.changeHandlerStars}/></div>
                 <input className="review-button" type="reset" value="Clear text fields"></input>
                 <input className="review-button" type="submit" value="submit"></input>

             </form>
            </div>
        );
    }
}

export default withRouter(ReviewForm);