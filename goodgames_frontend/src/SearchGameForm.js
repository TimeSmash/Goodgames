import React, { Component } from 'react';
import "./SearchGameForm.css"

//it receives the searchForGame fxn, which takes in event and searchTerm as arg
    //this fxn then makes fetch to IGDB to search and get results for games including searchTerm in title
    //The data returned -> App.setState({searchResults: data})
    //App can then take this data and pass it to Games/Results/whatever and map out as GameCards

class SearchGameForm extends Component {
    state = { searchTerm: "" }


    changeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    // ${searchTerm.split(" ").join("_")} <--Converts something like "Final Fantasy" to "Final_Fantasy"

    render() {
        //console.log("SearchGameForm props", this.props)
        // console.log("searchTerm", this.state.searchTerm) <--Shows live-updates of searchTerm
        return (
            
            <form id="search-game-form" onSubmit={(event) => {this.props.searchForGame(event,this.state.searchTerm)}}>
                <input id ="search-input" type="text" name="searchTerm" placeholder="Enter a game by name" onChange={this.changeHandler}></input>
                <input id ="search-submit" type="submit" value="Search"></input>
            </form>
        );
    }
} //end of SearchGameForm component

export default SearchGameForm;