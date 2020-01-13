import React from 'react';
import AdBar from './AdBar'
//stealing adbar and header format from Games.css, eventually make css file for that crap
import "./Games.css"
import "./About.css"


function About () {
    return <div>
            <div id="games-adbar-container">
                <AdBar></AdBar>
            </div>
            <h1 id="games-heading">About</h1>
            <div className = "about-container">
            <h1>Welcome to goodgames!</h1>
            <p>
                Goodgames is an archive powered by the IGDB (Internet Game Database) API. It helps you as gamers
                keep track of all the games you have played in your life, with the option to leave a review
                stating what you liked and disliked about the game. Due to the power of the IDGB API's database,
                you can rest assured that you can find almost any game that exists and add it to your collection.
            </p>
            <h1>Why use goodgames?</h1>
            <p>
                Goodgames is for gamers everywhere. While many sites serve as repositories containing a lot of
                information about games, their focus is usually only based on modern games. Furthermore, many sites
                are news based, and if they have reviews, they are only written by the staff of that site. To eliminate
                bias and any forms of corporate coercion, goodgames lets anyone post a review about a game. While the
                criteria on which one bases a review is more subjective this way, we rely on seasoned gamers and 
                skilled writers to provide quality reviews. It is our mantra that this site is as only good as its
                users, and the collection of reviews reflects this. We encourage users to write what they thought about 
                a game in depth, rather than a one or two sentence snippet or wordless review. 
            </p>
            <p>
                Goodgames will in the future have user-to-user interactivity where users can follow one another and see 
                what reviews they have posted recently. They may also see what a user has in their collection to discover games
                they may not have come across.
            </p>
            <h1>We rely on you!</h1>
            <p>
                Our company does not have any review writers on staff. We are purely devoted to the user experience with this site,
                straying from any kind of corporate influence. Because of this, it is up to the community to come together and leave
                insightful reviews on the games within this database. Furthermore, while we are also contributing to it, the IGDB database
                relies on gamers in addition to their own staff to contribute to the database, such as submitting cover images or screenshots
                for games. Updates to that database directly effect this site, so the more we all contribute, the better.
            </p>
        </div>
    </div>
}

export default About ;