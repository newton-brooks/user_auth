import React from 'react';
import axios from 'axios';


class RegisterUser extends React.Component {
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
            .post('http://localhost:3100/users/new', {
                username: usernameInput,
                password: passwordInput
            })
            .then((res) => {
                this.setState({
                    usernameInput: '',
                    passwordInput: '',
                    message: 'Register success'
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    usernameInput: '',
                    passwordInput: '',
                    message: 'Something went wrong'
                })
            })

    }



    render() {
        const { usernameInput, passwordInput, message } = this.state
        return (
            <div>
                <h1>Register </h1>
                Username: {" "}
                <input type="text" value={usernameInput}
                    onChange={this.handleUsernameChange} />
                Password: {" "}
                <input type="text" value={passwordInput}
                    onChange={this.handlePasswordChange} />
                <button onClick={this.submitForm} disabled={!usernameInput || !passwordInput}>Register</button>
                <br />
                {message}
            </div>
        )
    }
}

export default RegisterUser