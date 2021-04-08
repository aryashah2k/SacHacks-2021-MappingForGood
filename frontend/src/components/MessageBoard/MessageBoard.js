import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import './MessageBoard.css';

export default class MessageBoard extends React.Component {
    componentDidMount() {
        axios.get('https://stable-liberty-305417.wl.r.appspot.com/message-board')
            .then(res => {
                var docElements = [];
                for (var i=res.data.length-1; i >= 0; i--) {
                    docElements.push(
                        <div key={i} id={i} className="message">
                            <p style={{color: 'white'}}>{res.data[i].username}</p>
                            <hr />
                            <p style={{padding: "20px 0"}}>{res.data[i].message}</p>
                        </div>
                    )
                }
                ReactDOM.render(docElements, document.getElementById("message-board"));
                for (var i=res.data.length-1; i >= 0; i--) {
                    var newObserver = new IntersectionObserver((entries) => {
                        if (entries[0].isIntersecting) {
                            entries[0].target.setAttribute('style', `animation: fade-in; animation-duration: 1s;`);
                        }
                    });
                    newObserver.observe(document.getElementById(i));
                }
            })
            .catch(err => console.error(err));
        
    }
    render() {
        return (
            <div className="MessageBoard">
                <div id="message-board"></div>
            </div>
        )
    }
}