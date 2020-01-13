import React, { Component } from 'react';
import "./ReviewCard.css"
import starIcon from "./images/star-icon.png"
import { withRouter } from 'react-router-dom';
import clefairyLoading from "./images/clefairy-loading.gif"
import defaultImage from "./images/default-search-result-image.jpg"
class ReviewCard extends Component {
    //gets gameReview from Reviews
    
    state = { idgbIdOfgame: {}, game: {}, idgbObtained: false, gameObtained:false}

   //get game name and cover photo for each review
//    //Link to that game's page??
   
    getGameIDGBIdFromReview = () =>{
        // console.log("hello")
        fetch(`http://localhost:3010/games/${this.props.gameReview.game_id}`)
        .then(res =>res.json())
        .then(game => {
            console.log("game returned",game.idgb_id)
            this.setState({idgbIdOfgame: game.idgb_id, idgbObtained: true})
        })
    }

    getGameFromReview = () => {

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    //    use the game_id (which is really IGDB ID to get game info) to get back JSON with (igdb)id, name, cover.url
       fetch(proxyUrl + `https://api-v3.igdb.com/games/${this.state.idgbIdOfgame}?fields=id,name,cover.url`,
       {method: 'GET', 
       headers: {'user-key' :'7b458661e9a9ab138a9fb73f52f5e52f',
       'Accept':'application/json'}})
       //ex. returns { "id": 2136, "cover": {   "id": 79382,   "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1p92.jpg" }, "name": "Bayonetta"}   }
       .then(res=>res.json())
       .then(gameJSON => {
           this.setState({game: gameJSON, gameObtained: true})
           console.log("gameJSON",gameJSON)
        })
   }



   componentDidMount(){
       if (!this.state.idgbObtained){return  this.getGameIDGBIdFromReview()}
       
    }
   componentDidUpdate(){
          if (!this.state.gameObtained){return  this.getGameFromReview()}

   }

   

   componentWillUnmount(){
       this.setState({idgbIdObtained: false, gmeObtained: false})
   }
   coverSmallUrl = () =>{
       if (this.state.game[0].cover !==undefined) {
           let cover = this.state.game[0].cover.url
           return cover.slice(0,36) + "t_logo_med" + cover.slice(43)    
       } else {
           return defaultImage
       }
   }
    render() {
        // this.getGameIDGBIdFromReview()
        // console.log("Review card props", this.props)
        // console.log("Review card contents game id", this.props.gameReview.game_id)
        // console.log("ReviewCard State", this.state)
        // content: ""
        // created_at: "2019-09-04T18:00:26.745Z"
        // game_id: 8
        // headline: ""
        // id: 1
        // stars: 0
        // updated_at: "2019-09-04T18:00:26.745Z"
        // user_id: 7


        return (
            <div className="review-card" style={{"border": "1px solid black"}}>
                {this.state.game[0] !== undefined ? 
                <div>
                {this.state.game[0] !== undefined ? <h1 className="game-name">{this.state.game[0].name}</h1> : <img id = "load" src ={clefairyLoading}></img>}
                {this.state.game[0] !== undefined ? <img className="game-image" alt="" src ={this.coverSmallUrl()}></img> :  <img id = "load" src ={clefairyLoading}></img>}
                <h2 className="game-headline">Headline: {this.props.gameReview.headline === ""? "Put a headline!! Put a headline!! Put a h!" : this.props.gameReview.headline}</h2>
                <h2 className="content-header">Content:</h2>
                <p id="content"> {this.props.gameReview.content === "" ? "Put some content! ": this.props.gameReview.content}</p>
                <div className="stars-container">
                    <p>Rating</p>
                    <div className="stars-text">{this.props.gameReview.stars}</div >
                    <div className="stars-img"><img src={starIcon} alt=""></img></div >
                </div>
                <div className="buttons-container"> 
                    <button onClick={()=>{this.props.goToEditReview(this.state.game[0], this.props.gameReview)}}>Edit This Review</button>
                    {/* <button>Delete This Review</button> */}
                </div>
                </div>
                    :<div><h2>Loading...</h2> <img id = "load" src ={clefairyLoading}></img></div>}
            </div>
        );
    }
}

export default withRouter(ReviewCard);