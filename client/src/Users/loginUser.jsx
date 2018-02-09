import React from 'react'
import axios from 'axios'

class LoginUser extends React.Component {
    constructor() {
        super();
        this.state = {
            usernameInput: '',
            passwordInput: '',
            message: ''
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            usernameInput: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            passwordInput: e.target.value
        })
    }

    submitForm = () => {
        const { usernameInput, passwordInput } = this.state;
        axios
            .post('http://localhost:3100/users/login', {
                username: usernameInput,
                password: passwordInput
            })
            .then((res) => {
                this.props.setUser(res.data)
                this.props.toggle()
                this.setState({
                    usernameInput: '',
                    passwordInput: '',
                    message: 'Login success'
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    usernameInput: '',
                    passwordInput: '',
                    message: 'Username / Password Incorrect.'
                })
            })

    }



    render() {
        const { usernameInput, passwordInput, message } = this.state
        return (
            <div>
                <h1>Log In </h1>
                Username: {" "}
                <input type="text" value={usernameInput}
                    onChange={this.handleUsernameChange} />
                Password: {" "}
                <input type="text" value={passwordInput}
                    onChange={this.handlePasswordChange} />
                <button onClick={this.submitForm} disabled={!usernameInput || !passwordInput}>Login</button>
                <br />
                {message}
            </div>
        )
    }
}


export default LoginUser