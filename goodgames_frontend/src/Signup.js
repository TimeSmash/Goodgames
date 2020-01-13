import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import './Signup.css';
import logo from './images/logo.png';
import Footer from './Footer'

class Signup extends Component {
    state = { name: "",
              email: "",
              password: "",
              birthday: ""
             }

    componentDidMount(){
        this.props.hideDefaultFooter()
    }

    componentWillUnmount(){
        this.props.unhideDefaultFooter()
    }

    changeHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
    console.log(event.target.name, event.target.value)
    }

    render() {
        this.props.ifUserLoggedInRedirectToHome()
        return (
            <div id="signup-page">
                <img src={logo} id="signup-logo" alt="goodgames"></img>
                <p  className="intro">Thanks for signing up! <br></br>Please fill out the following:</p>
                <p id="already-a-member">Already a member? <Link to='/login' id="to-login" style={{"textDecoration": "none",}}>Login!</Link></p>
                <form id="signup" onSubmit={(event)=> {this.props.addNewUser(event, this.state)}}>
                    <label >
                        <span className="username-span">Username</span><br></br>
                        <input name ="name"  className="left-signup-input" onChange={(event) => {this.changeHandler(event)}}></input>
                    </label><br></br>

                    <label >
                    <span className="password-span">Password</span><br></br>
                        <input name ="password" className="right-signup-input" onChange={(event) => {this.changeHandler(event)}}></input>
                    </label><br></br>

                    <label>
                    <span className="email-span">Email</span><br></br>
                        <input name ="email"  className="left-signup-input" onChange={(event) => {this.changeHandler(event)}}></input>
                    </label><br></br>

                    <label>
                    <span className="right-signup-span">Birthday</span><br></br>
                        <input name ="birthday"  className="right-signup-input" onChange={(event) => {this.changeHandler(event)}}></input>
                    </label><br></br>
                    {/* *****BEGIN CHECKBOXES ******* */}
                    {/* <p id="genre-selection">Please select any genres you are interested in</p>
                    <div id="checkbox-container">
                    <div className="checkbox-left-container"><br></br>
                        <label >
                        <input name ="adventure" type="checkbox" ></input>
                        Adventure
                    </label><br></br>
                        <label>
                        <input  name ="arcade" type="checkbox" ></input>
                        Arcade
                    </label><br></br>
                        <label>
                        <input  name ="fighting" type="checkbox" ></input>
                        Fighting
                    </label><br></br>
                        <label>
                        <input  name ="hack+slash" type="checkbox" ></input>
                        Hack + Slash
                    </label><br></br>
                        <label>
                        <input name ="indie" type="checkbox"></input>
                        Indie
                    </label><br></br>
                        <label>
                        <input name ="music" type="checkbox"></input>
                        Music
                    </label>
                    </div>
                    <div className="checkbox-middle-container">
                    <label>
                        <input name ="platform" type="checkbox"></input>
                        Platform
                    </label><br></br>

                    <label>
                        <input name ="point+click" type="checkbox"></input>
                        Point+Click
                    </label><br></br>
                    <label>
                        <input  name ="puzzle" type="checkbox" ></input>
                        Puzzle
                    </label><br></br>
                    
                    <label>
                        <input name ="quiz/trivia" type="checkbox"></input>
                        Quiz/Trivia
                    </label><br></br>
                    <label>
                        <input name ="racing" type="checkbox"></input>
                        Racing
                    </label><br></br>
                    <label>
                        <input  name ="rpg" type="checkbox" ></input>
                        RPG
                    </label><br></br>
                    </div>
                    <div className="checkbox-right-container">
                    <label>
                        <input name ="RTS" type="checkbox"></input>
                        RTS
                    </label><br></br>   
                    <label>
                        <input name ="shooter" type="checkbox"></input>
                        Shooter
                    </label><br></br>
                    <label>
                        <input name ="simulation" type="checkbox"></input>
                        Simulation
                    </label><br></br>
                    <label>
                        <input  name ="sports" type="checkbox" ></input>
                        Sports
                    </label><br></br>
                    <label>
                        <input name ="Strategy" type="checkbox"></input>
                        Strategy
                    </label><br></br>
                    <label>
                        <input name ="turn-based-strategy" type="checkbox"></input>
                        Turn-Based-Strategy
                    </label><br></br> */}
                    {/* </div> */}
                    {/* </div> */}
                    <br></br>
                    <br></br>
                    <input type="submit" id="signup-button" value="Sign Up"/>
                </form>
                <div style={{"color": "white", "marginBottom": "-1em"}}><Footer></Footer> </div>
            </div>
        )
    }
}

export default Signup