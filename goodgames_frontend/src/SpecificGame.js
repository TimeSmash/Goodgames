import React, { Component } from 'react';
import "./SpecificGame.css"
import defaultImage from "./images/default-search-result-image.jpg"
class SpecificGame extends Component {
    //A page for a Game changes appearance on whether user has in list slightly
    //gameToRedirectTo 
    state = { game: {},
              showLoadingIcon: true }

     componentDidMount(){
        // this.props.revertRedirectToSpefGameToFalse()
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        // console.log("request", `https://api-v3.igdb.com/games/${this.props.gameToRedirectTo}?fields=id,name,platforms,cover.url,genres,summary`)
        fetch(proxyUrl + `https://api-v3.igdb.com/games/${this.props.gameToRedirectTo}?fields=id,name,platforms,cover.url,genres,summary,screenshots.*`, {
            method: 'GET', 
            headers: {'user-key' :'7b458661e9a9ab138a9fb73f52f5e52f',
            'Accept':'application/json'}
        })
        .then(res => res.json())
        .then(data => { 
            console.log("data returnd",data[0])
            this.props.revertRedirectToFalse()
            this.setState({game: data[0], showLoadingIcon: false}) 
        })
    }
    
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
            switch (platform){
                case 51:
                  return "Family Computer Disc System"
                  // eslint-disable-next-line
                  break;
                case 52:
                  return "Arcade"
                  // eslint-disable-next-line
                  break;
                case 53:
                  return "MSX2"
                  // eslint-disable-next-line
                  break; 
                case 54:
                  return ""
                  // eslint-disable-next-line
                  break;
                case 55:
                  return "Mobile"
                  // eslint-disable-next-line
                  break;
                case 56:
                  return "WiiWare"
                  // eslint-disable-next-line
                  break;
                case 57:
                  return "WonderSwan"
                  // eslint-disable-next-line
                  break;
                case 58:
                  return "Super Famicom"
                  // eslint-disable-next-line
                  break;
                case 59:
                  return "Atari 2600"
                  // eslint-disable-next-line
                  break;
                case 60:
                  return "Atari 7800"
                  // eslint-disable-next-line
                  break;
                case 61:
                  return "Atari Lynx"
                  // eslint-disable-next-line
                  break;
                case 62:
                  return "Atari Jaguar"
                  // eslint-disable-next-line
                  break;
                case 63:
                  return "Atari ST/STE"
                  // eslint-disable-next-line
                  break;
                case 64:
                  return "Sega Master System"
                  // eslint-disable-next-line
                  break;
                case 65:
                  return "Atari 8-bit"
                  // eslint-disable-next-line
                  break;
                case 66:
                  return "Atari 5200"
                  // eslint-disable-next-line
                  break;
                case 67:
                  return "Intellivision"
                  // eslint-disable-next-line
                  break;
                case 68:
                  return "ColecoVision"
                  // eslint-disable-next-line
                  break;
                case 69:
                  return "BBC Microcomputer System"
                  // eslint-disable-next-line
                  break;
                case 70:
                  return "Vectrex"
                  // eslint-disable-next-line
                  break;
                case 71:
                  return "Commodore VIC-20"
                  // eslint-disable-next-line
                  break;
                case 72:
                  return "Ouya"
                  // eslint-disable-next-line
                  break;
                case 73:
                  return "BlackBerry OS"
                  // eslint-disable-next-line
                  break;
                case 74:
                  return "Windows Phone"
                  // eslint-disable-next-line
                  break;
                case 75:
                  return "Apple II"
                  // eslint-disable-next-line
                  break;
                case 76:
                  return ""
                  // eslint-disable-next-line
                  break;
                case 77:
                  return "Sharp X1"
                  // eslint-disable-next-line
                  break;
                case 78:
                  return "Sega CD"
                  // eslint-disable-next-line
                  break;
                case 79:
                  return "Neo Geo MVS"
                  // eslint-disable-next-line
                  break;
                case 80:
                  return "Neo Geo AES"
                  // eslint-disable-next-line
                  break;
                case 81:
                  return ""
                  // eslint-disable-next-line
                  break;
                case 82:
                  return "Web browser"
                  // eslint-disable-next-line
                  break;
                case 83:
                  return ""
                  // eslint-disable-next-line
                  break;
                case 84:
                  return "SG-1000"
                  // eslint-disable-next-line
                  break;
                case 85:
                  return "Donner Model 30"
                  // eslint-disable-next-line
                  break;
                case 86:
                  return "TurboGrafx-16/PC Engine"
                  // eslint-disable-next-line
                  break;
                case 87:
                  return "Virtual Boy"
                  // eslint-disable-next-line
                  break;
                case 88:
                  return "Odyssey"
                  // eslint-disable-next-line
                  break;
                case 89:
                  return "Microvision"
                  // eslint-disable-next-line
                  break;
                case 90:
                  return "Commodore PET"
                  // eslint-disable-next-line
                  break;
                case 91:
                  return "Bally Astrocade"
                  // eslint-disable-next-line
                  break;
                case 92:
                  return "SteamOS"
                  // eslint-disable-next-line
                  break;
                case 93:
                  return "Commodore 16"
                  // eslint-disable-next-line
                  break;
                case 94:
                  return "Commodore Plus/4"
                  // eslint-disable-next-line
                  break;
                case 95:
                  return "PDP-1"
                  // eslint-disable-next-line
                  break;
                case 96:
                  return "PDP-10"
                  // eslint-disable-next-line
                  break;
                case 97:
                  return "PDP-8"
                  // eslint-disable-next-line
                  break;
                case 98:
                  return "DEC GT40"
                  // eslint-disable-next-line
                  break;
                case 99:
                  return "Family Computer (FAMICOM)"
                  // eslint-disable-next-line
                  break;
                case 100:
                  return "Analogue electronics"
                  // eslint-disable-next-line
                  break;
                  }
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

    ifCoverNotUndefinedReturnCover = (cover) => {
        if (cover === undefined){
          if(!this.state.showLoadingIcon){
            return defaultImage
          }
        } else {
          return cover.url.slice(0,36) + "t_cover_big" + cover.url.slice(43)
          }
        }

    screenshotsDiv = (screenshots) => {
        if (screenshots === undefined) {
            return ""
        } else if (screenshots.length === 1)
        {
            return <div className="outer-div">
                    <div className = "row">
                        <img src= {screenshots[0].url} alt="" className = "column"></img>
                        {/* <img src= {screenshots[1].url} alt="" className = "column"></img> */}
                        {/* <img src= {screenshots[2].url} alt="" className = "column"></img> */}
                    </div>
                   </div>
        } else if (screenshots.length === 2) {
            return <div className="outer-div">
                    <div className = "row">
                        <img src= {screenshots[0].url} alt="" className = "column"></img>
                        <img src= {screenshots[1].url} alt="" className = "column"></img>
                        {/* <img src= {screenshots[2].url} alt="" className = "column"></img> */}
                    </div>
                   </div>
        } else  {
            return <div className="outer-div">
                    <div className = "row">
                        <img src= {screenshots[0].url} alt="" className = "column"></img>
                        <img src= {screenshots[1].url} alt="" className = "column"></img>
                        <img src= {screenshots[2].url} alt="" className = "column"></img>
                    </div>
                   </div>
        }
    }

    render() {
        // {if (this.state.game != {})this.getGameDetails()}
        // console.log("SpeicifcGame props",this.props)
        console.log("SpeicifcGame state",this.state.game)
        // debugger
        console.log("SpeicifcGame screenshots", this.screenshotsDiv(this.state.game.screenshots))
        console.log("SpeicifcGame cover", this.state.game.cover)
        return (
            <div>
            {this.state.showLoadingIcon? <div> <h2>Loading..</h2><img id="loading-gif" src ="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif"></img></div> 
            :  <div>
                <h1>{this.state.game.name}</h1>
                <img id ="cover-photo" src={this.ifCoverNotUndefinedReturnCover(this.state.game.cover)}></img>
                <ul className="details-list">
                    <li className="details-list-item">
                        <p className= "platforms">Platforms: {this.returnTranslatedElements(this.state.game.platforms,"platforms")}</p>
                    </li>
                    <li className="details-list-item">
                        <p className= "genres">Genres: {this.returnTranslatedElements(this.state.game.genres,"genres")}</p>
                    </li>
                    <li className="details-list-item">
                        <p className= "summary">Summary: {this.state.game.summary}</p>
                    </li>
                </ul>
                {this.screenshotsDiv(this.state.game.screenshots)}
            </div>
            }
            </div>
        );
    }
}

export default SpecificGame;