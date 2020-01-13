import React, { Component } from 'react';
import "./RecentlyReviewed.css"
import defaultImage from "./images/default-search-result-image.jpg"
class RecentlyReviewed extends Component {
    state = { imgUrls: []}

    componentDidMount(){
        //From Reviews db, get three reviews with highest created_at value
        //So sort reviews by created_at, then get first 3
        var urls = []
        fetch("http://localhost:3010/recently_reviewed_games")
        .then(res => res.json())
        .then(json => {
            console.log("cdM Rec",json)
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            json.most_recent_three_games_with_idgb_id.map( 
                idgbId =>{
                    fetch(proxyUrl + `https://api-v3.igdb.com/games/${idgbId}?fields=cover.url`,
                    {method: "GET",
                    headers: {'user-key' :'7b458661e9a9ab138a9fb73f52f5e52f',
                              'Accept':'application/json'}
                    })
                    .then(res => res.json())
                    .then(json => {
                        if (json[0] !== undefined){
                                if(json[0].cover !== undefined){
                                    urls =  [...urls, json[0].cover.url]
                                } else {
                                    urls = [...urls, defaultImage]
                                }
                            // console.log("ID", json[0].cover.url)
                            console.log("URLSLSLSLSL", urls)
                            this.setState({imgUrls: urls})    
                        }
                    })
                }
            )
        })
    }
        
    

    

    render() {
        console.log("reviewRec state", this.state)
        return (
            //Get 3 Reviews via created_at 
            <div id="recently-reviewed-container">
                {/* //images side by side */}
                <h2>Recently Reviewed</h2>
                <div class="recent-image">
                    <img src={this.state.imgUrls[0]} alt=""></img>
                </div>
                <div class="recent-image">
                    <img src={this.state.imgUrls[1]} alt=""></img>
                </div>
                <div class="recent-image">
                    <img src={this.state.imgUrls[2]} alt=""></img>
                </div>
            </div>
        );
    }
}

export default RecentlyReviewed;