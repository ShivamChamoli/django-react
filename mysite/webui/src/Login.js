import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Login.css';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    handleSubmitClick(event){
        if(document.getElementById('username').value === 'admin' && document.getElementById('password').value === 'admin')
        {
            this.props.history.push('/edit');
        }
        else
        {
            this.props.history.push('/home');
        }
    }
    handleRegisterClick(event){
        this.props.history.push('/register');
    }
    render() {
        return (
        <div className="login-screen">
            <MuiThemeProvider>
            <div>
            <AppBar
                title="Login"
            />
            <TextField id="username"
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event,newValue) => this.setState({username:newValue})}
                />
            <br/>
                <TextField id="password"
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue})}
                />
                <br/>
                <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleSubmitClick(event)}/>
                <RaisedButton label="Register" primary={false} onClick={(event) => this.handleRegisterClick(event)}/>
            </div>
            </MuiThemeProvider>
        </div>
        );
    }
}