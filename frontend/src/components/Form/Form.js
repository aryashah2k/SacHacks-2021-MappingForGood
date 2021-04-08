import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            message: ''
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
    }
    componentDidMount() {
        fetch('https://stable-liberty-305417.wl.r.appspot.com/message-board')
            .then((res) => {
            })
            .catch((err) => console.error(err))
    }
    sendMessage(e) {
        // Send message to Flask backend so it can be updated with MongoDB
        let input_elements = document.getElementsByTagName("input");
        let textarea = document.getElementById('newMessageDescription');
        for (let el of input_elements) {
            if (!el.checkValidity()) {
                el.style.border = "3px solid red";
                return;
            }
        }
        if (!textarea.checkValidity()) {
            textarea.style.border = "3px solid red";
            return;
        }
        fetch('https://stable-liberty-305417.wl.r.appspot.com/message-board', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                "email": this.state.email,
                "username": this.state.username,
                "message": this.state.message
            })
        })
        .then(() => {
            ReactDOM.render(
                <div style={{textAlign: "center", animationName: 'fade-in', animationDuration: 1}}>
                    <svg style={{color: "lightgreen"}} xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                    <h3>Thank you for your submission!</h3>
                </div>,
                document.getElementById('accepted')
            );
            document.getElementById('accepted').scrollIntoView({block: "end", inline: "nearest", behavior: "smooth"});
        })
    }
    updateFormState(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div className="Form">
                <h1 style={{textAlign: "center"}}>Looking to get help for your neighborhood? Please leave your concerns here!</h1>
                <form>
                    <label htmlFor="email">Email</label><br></br><br></br>
                    <input type="email" name="email" className="pill" required={true} onChange={this.updateFormState}/>
                    <br></br><br></br>
                    <label htmlFor="username">Username</label><br></br><br></br>
                    <input className="pill" type="text" name="username" required={true} onChange={this.updateFormState} />
                    <br></br><br></br>
                    <label htmlFor="message">Message</label><br></br><br></br>
                    <textarea name="message" id="newMessageDescription" autoFocus required={true} onChange={this.updateFormState}></textarea>
                    <br></br><br></br>
                    <button type="button" onClick={this.sendMessage}>Send Message</button>
                </form>
                <div id="accepted" style={{scrollBehavior: "smooth"}}></div>
            </div>
        )
    }
}