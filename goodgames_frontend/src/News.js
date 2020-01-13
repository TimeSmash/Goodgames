import React from 'react';
import AdBar from './AdBar';
import './News.css'
import magfestPic from './images/ad4.jpeg'
import celestePic from './images/celeste-chapter-9.jpeg'
import switchBanner from './images/nintendo-switch-banner.jpg'
import "./Games.css"

function News() {
    return <div>
        <div id="games-adbar-container"><AdBar/></div>
            <h1 id="games-heading">News</h1>
            <div className = "news-container">
                <div className="blurb">
                    <img src= {magfestPic} alt="MagFest Jan 2nd to Jan 5th"></img>
                    <h2>9-9-19: MAGFest is coming!</h2>
                    <p>
                        MagFest, the Music and Gaming Fest, is being held at the National Gaylord
                        Convention Center in Baltirmore Maryland! Be sure you don't miss out
                        on the many new games they will have to offer!
                    </p>
                </div>
                <div className="blurb">
                    <img src= {celestePic} alt={celestePic}></img>
                    <h2>9-1-19: Celeste Chapter 9 DLC announced!</h2>
                    <p>
                        The creators of Celeste have announced a final free DLC package for Celeste.
                        Title Chapter 9: Farewell, it promises to be the strawberry on top of an already
                        grand indie game. Be sure to update your reviews when it comes out!
                    </p>
                </div>
                <div className="blurb">
                    <img src= {switchBanner} alt={switchBanner}></img>
                    <h2>9-1-19: Nintendo Switch SNES Games!</h2>
                    <p>
                        During the Nintendo Direct, it was announced that SNES games are coming to Switch!
                    </p>
                </div>
            </div>
           
        </div>
    
}

export default News;