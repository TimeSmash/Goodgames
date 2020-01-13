import React, { Component } from 'react';
import defaultImage from "./images/default-search-result-image.jpg"
import "./GameCard.css"

// eslint-disable-next-line
//it should receive props of game object with certain parameters

//Some of the fxns below are a little costly but save me API calls. Any translate/build range fxn
//lets me use less API call amounts so there you go


//TO DO Translate platforms and genres
//Screenshot better display
//Add to Games Button, with option to add review at the moment
class GameCard extends Component {
    
    //Note these are RESULTS from a search



    gamePlatforms = this.props.game.platforms
    gameGenres = this.props.game.genres

    separateElements = (array) =>{
        // console.log("array rec'd by separateElements is", array)
        //  if (typeof array == "undefined") {
        //      return "No platforms found, suspiciously."
        //  } else if (array.length == 0) {
        //     return "No platforms found, suspiciously."
        //  } else {
            return array.join(", ").split(" ")
        //  }
    }

    rangeBuild = (beginning, end) => {
        let range = []
        for (var i = beginning; i< end+1; i++) {
        range.push(i)
        }
        return range
        }

   
//Numbers with no corresponding platform == 1,2,10,17,28,31,40,43,54,76,81,83,168

genreTranslate = (platform) =>{
    let oneToTwenty = this.rangeBuild(1,20)
    let twentyoneToThirtyThree = this.rangeBuild(21,40)
    
        if (oneToTwenty.includes(platform)){
            // eslint-disable-next-line
            switch (platform){
                    case 1:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 2:
                        return "Point-and-click"
                        // eslint-disable-next-line
                        break;
                    case 3:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 4:
                        return "Fighting"
                        // eslint-disable-next-line
                        break;
                    case 5:
                        return "Shooter"
                        // eslint-disable-next-line
                        break;
                    case 6:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 7:
                        return "Music"
                        // eslint-disable-next-line
                        break;
                    case 8:
                        return "Platform"
                        // eslint-disable-next-line
                        break;
                    case 9:
                        return "Puzzle"
                        // eslint-disable-next-line
                        break;
                    case 10:
                        return "Racing"
                        // eslint-disable-next-line
                        break;
                    case 11:
                        return "Real Time Strategy (RTS)"
                        // eslint-disable-next-line
                        break;
                    case 12:
                        return "Role-playing (RPG)"
                        // eslint-disable-next-line
                        break;
                    case 13:
                        return "Simulator"
                        // eslint-disable-next-line
                        break;
                    case 14:
                        return "Sport"
                        // eslint-disable-next-line
                        break;
                    case 15:
                        return "Strategy"
                        // eslint-disable-next-line
                        break;
                    case 16:
                        return "Turn-based strategy (TBS)"
                        // eslint-disable-next-line
                        break;
                    case 17:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 18:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 19:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 20:
                        return ""
                        // eslint-disable-next-line
                        break;
            }
        } else if (twentyoneToThirtyThree.includes(platform)){
                switch (platform){
                    case 21:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 22:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 23:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 24:
                        return "Tactical"
                        // eslint-disable-next-line
                        break;
                    case 25:
                        return "Hack + Slash"
                        // eslint-disable-next-line
                        break;
                    case 26:
                        return "Quiz/Trivia"
                        // eslint-disable-next-line
                        break;
                    case 27:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 28:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 29:
                        return ""
                        // eslint-disable-next-line
                        break;
                    case 30:
                        return "Pinball"
                        // eslint-disable-next-line
                        break;
                    case 31:
                        return "Adventure"
                        // eslint-disable-next-line
                        break;
                    case 32:
                        return "Indie"
                        // eslint-disable-next-line
                        break;
                    case 33:
                        return "Arcade"
                        // eslint-disable-next-line
                        break;
                }
        } else {
            return ""
        }
    }

///////////////////////////

/////FINISH THIS
    platformTranslate = (platform) =>{
        let oneToFifty = this.rangeBuild(1,50)
        let fiftyoneToOneHundred = this.rangeBuild(51,100)
        let oneHunderedOneToOneHundredSeventy = this.rangeBuild(101,170)
        if (oneToFifty.includes(platform)){
            switch (platform){
            case 1:
                return ""
                // eslint-disable-next-line
                break;
            case 2:
                return ""
                // eslint-disable-next-line
                break;
            case 3:
                return "Linux"
                // eslint-disable-next-line
                break;
            case 4:
                return "Nintendo 64"
                // eslint-disable-next-line
                break;
            case 5:
                return "Wii"
                // eslint-disable-next-line
                break;
            case 6:
                return "PC (Microsoft Windows)"
                // eslint-disable-next-line
                break;
            case 7:
                return "PlayStation"
                // eslint-disable-next-line
                break;
            case 8:
                return "PlayStation 2"
                // eslint-disable-next-line
                break;
            case 9:
                return "PlayStation 3"
                // eslint-disable-next-line
                break;
            case 10:
                return ""
                // eslint-disable-next-line
                break;
            case 11:
                return "Xbox"
                // eslint-disable-next-line
                break;
            case 12:
                return "Xbox 360"
                // eslint-disable-next-line
                break;
            case 13:
                return "PC DOS"
                // eslint-disable-next-line
                break;
            case 14:
                return "Mac"
                // eslint-disable-next-line
                break;
            case 15:
                return "Commodore C64/128"
                // eslint-disable-next-line
                break;
            case 16:
                return "Amiga"
                // eslint-disable-next-line
                break;
            case 17:
                return ""
                // eslint-disable-next-line
                break;
            case 18:
                return "Nintendo Entertainment System (NES)"
                // eslint-disable-next-line
                break;
            case 19:
                return "Super Nintendo Entertainment System (SNES)"
                // eslint-disable-next-line
                break;
            case 20:
                return "Nintendo DS"
                // eslint-disable-next-line
                break;
            case 21:
                return "Nintendo GameCube"
                // eslint-disable-next-line
                break;
            case 22:
                return "Game Boy Color"
                // eslint-disable-next-line
                break;
            case 23:
                return "Dreamcast"
                // eslint-disable-next-line
                break;
            case 24:
                return "Game Boy Advance"
                // eslint-disable-next-line
                break;
            case 25:
                return "Amstrad CPC"
                // eslint-disable-next-line
                break;
            case 26:
                return "ZX Spectrum"
                // eslint-disable-next-line
                break;
            case 27:
                return "MSX"
                // eslint-disable-next-line
                break;
            case 28:
                return ""
                // eslint-disable-next-line
                break;
            case 29:
                return "Sega Mega Drive/Genesis"
                // eslint-disable-next-line
                break;
            case 30:
                return "Sega 32X"
                // eslint-disable-next-line
                break;
            case 31:
                return ""
                // eslint-disable-next-line
                break;
            case 32:
                return "Sega Saturn"
                // eslint-disable-next-line
                break;
            case 33:
                return "Game Boy"
                // eslint-disable-next-line
                break;
            case 34:
                return "Android"
                // eslint-disable-next-line
                break;
            case 35:
                return "Sega Game Gear"
                // eslint-disable-next-line
                break;
            case 36:
                return "Xbox Live Arcade"
                // eslint-disable-next-line
                break;
            case 37:
                return "Nintendo 3DS"
                // eslint-disable-next-line
                break;
            case 38:
                return "PlayStation Portable"
                // eslint-disable-next-line
                break;
            case 39:
                return "iOS"
                // eslint-disable-next-line
                break;
            case 40:
                return ""
                // eslint-disable-next-line
                break;
            case 41:
                return "Wii U"
                // eslint-disable-next-line
                break;
            case 42:
                return "N-Gage"
                // eslint-disable-next-line
                break;
            case 43:
                return ""
                // eslint-disable-next-line
                break;
            case 44:
                return "Tapwave Zodiac"
                // eslint-disable-next-line
                break;
            case 45:
                return "PlayStation Network"
                // eslint-disable-next-line
                break;
            case 46:
                return "PlayStation Vita"
                // eslint-disable-next-line
                break;
            case 47:
                return "Virtual Console (Nintendo)"
                // eslint-disable-next-line
                break;
            case 48:
                return "PlayStation 4"
                // eslint-disable-next-line
                break;
            case 49:
                return "Xbox One"
                // eslint-disable-next-line
                break;
            case 50:
                return "3DO Interactive Multiplayer"
                // eslint-disable-next-line
                break;
            }
                                    
        } else if (fiftyoneToOneHundred.includes(platform)){
            return "It was between 51-100"
        } else if (oneHunderedOneToOneHundredSeventy.includes(platform)){
            return "101-170"
    }   
    
}

    returnTranslatedElements = (array, dataset) =>{
        if (typeof array === "undefined") {
            return "None found, suspiciously."
        } else if (array.length === 0) {
           return "None found, suspiciously."
        }  else {
            return this.separateElements(array) // get this  ["1", "2"]
            .map(element => { return parseInt(element)})
            .map(element => {
                // console.log("Platform no. seen by rTP", platform)
                if (dataset == "platforms"){
                    return this.platformTranslate(element)
                } else {
                    return this.genreTranslate(element)
                }
            }).join(", ") 
            }
    }

    summaryTruncate140Chars = (summary) =>{
        if (summary === undefined){
            return "None found, suspiciously."
          } else {
        return summary.slice(0,140)+"..."
          }
    }


    //if there's no cover, use defaultimage [?]. Otherwise, get the cover_big version of the game
    ifCoverNotUndefinedReturnCover = (cover) => {
        if (cover === undefined){
          return defaultImage
        } else {
            // console.log("cover url",cover.url)
          return cover.url.slice(0,36) + "t_cover_big" + cover.url.slice(43)
          }
        }
    
  
        // platformTranslate = (platform) => {
    //     if (platform == 1) {
    //         return "Nintendo"
    //     }
    // }

    // translatedPlatforms
    // //first separate the platforms (becomes string)
    // //then make them back into array via split (" ")
    // //then take each number of the array and do translatePlatform on it via MAP
    // //

    state = { redirect: false }

    render() {

        // console.log("GameCard state",this.state)
        console.log("GameCard props: all", this.props)
        // console.log("GameCard props: game",this.props.game)
        // console.log("GameCard cover url",this.ifCoverNotUndefinedReturnCover(this.props.game.cover))
        

        return (
            <div className="gamecard">
                <h1 className="title">{this.props.game.name}</h1>
                 <img className = "box" src={this.ifCoverNotUndefinedReturnCover(this.props.game.cover)} alt=""></img>
                <div className ="details-container">
                    <ul className="details-list">
                        <li className="details-list-item">
                            <p className= "platforms">Platforms: {this.returnTranslatedElements(this.gamePlatforms, "platforms")}</p>
                        </li>
                        <li className="details-list-item">
                            <p className= "genres">Genres: {this.returnTranslatedElements(this.gameGenres, "genres")}</p>
                        </li>
                        <li className="details-list-item">
                            <p className= "summary">Summary: {this.summaryTruncate140Chars(this.props.game.summary)}</p>
                        </li>
                    </ul>
                    <button className = "card-button" id="add-to-games" onClick={() => this.props.goToSpecificGame(this.props.game.id)}>More Details</button>
                    <button className = "card-button" id="add-to-games" onClick={() => this.props.addToUserGames(this.props.userDetails.id,this.props.game)}>Add To Games List</button>
                </div>
            </div>
        );
    }
}

export default GameCard;