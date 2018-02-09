import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import LoginUser from './loginUser'
import RegisterUser from './registerUser'


class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            user: ''
        }
    }


    toggleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }


    setUser = (data) => {
        this.setState({
            user: data.username
        })
    }

    renderLogin = () => {
        return (
            <LoginUser toggle={this.toggleLogin}
                setUser={this.setUser} />
        )
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route path='/users/login' render={this.renderLogin} />
                    <Route path='/users/register' component={RegisterUser} />
                </Switch>
            </div>
        )
    }

}

export default Users

