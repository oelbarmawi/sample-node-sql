import React, {Component} from 'react';
// import axios from 'axios';
import './login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            pass: ""
        }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    // Lifecycle method to connect to backend
    componentDidMount() {
        // fetch('/insert/credentials', {
        //     headers : {
        //         "user": "something",
        //         "pass": "somethingelse"
        //     }
        // }).then(res => res.json())
            // .then(username => this.set)
    }
    handleUserChange(event) {
        this.setState({user: event.target.value});
    }

    handlePassChange(event) {
        this.setState({pass: event.target.value});
    }

    handleSubmit(event) {
        var data = {
            "user": this.state.user,
            "pass": this.state.pass
        }
        console.log(data);
        fetch('/insert/credentials', {
            method: "POST",
            headers: {
                "user": this.state.user,
                "pass": this.state.pass
            }
        })
        .then(r => console.log(r))
        .catch(e => console.log(e));
        event.preventDefault();
    }

    handleReset(event) {
        fetch('/deletedb')
        .then(r => console.log(r))
        .catch(e => console.log(e));
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={this.state.user} onChange={this.handleUserChange}/><br/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.pass} onChange={this.handlePassChange}/>
                    </label><br/>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.handleReset}>
                    Reset
                </button>
            </div>
        );
    }
}

export default Login;
