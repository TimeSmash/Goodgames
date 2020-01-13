import React, {Component} from 'react';
import './Login.css';
import  {Link} from 'react-router-dom';
import logo from './images/logo-large-black-font.png'
import Footer from './Footer'


class Login extends Component {
    state = { name:"",
              password: "" }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log("Login",event.target.name, event.target.value)
        }

    componentDidMount(){
        this.props.hideDefaultFooter()
    }

    componentWillUnmount(){
        this.props.unhideDefaultFooter()
    }

    render() {
        this.props.ifUserLoggedInRedirectToHome()
        return (
            <div id="login-page">
            <img src={logo} alt="goodgames"></img>
            <p className="intro">Welcome! Please log in.</p>
                <form onSubmit={(event) =>{this.props.login(event, this.state)}}>
                    <label id="username-label">
                        Username
                    </label>
                        <input onChange={(event)=>{this.changeHandler(event)}} name="name" ></input>
                    <br></br>
                    <label id="password-label">
                        Password
                    </label>
                        <input type="password" onChange={(event)=>{this.changeHandler(event)}} name="password"></input>
                    <br></br>
                    <input type="submit" id="login-page-button"value="Log In"></input>
                </form>
                <br></br>
                <br></br><br></br>
                <p className="intro">Not a member?<br></br>
                <Link id='to-signup' to='/signup' style={{"textDecoration": "none"}}>Sign Up!</Link>
                </p>
                <div style={{"color": "white", "marginTop": "9em"}}><Footer></Footer> </div>
            </div>
        );
    }
}

export default Login;