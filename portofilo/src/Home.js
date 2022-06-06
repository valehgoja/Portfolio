import React, { Component } from "react";
import photo from "./images/back2.jpg";
import logo from "./images/github.png"
import logoln from "./images/linkedn.png"
export default class Home extends Component {

  render() {
    return (
    <div className='body'>
       
      <div className="container">
        <img className="backgroundHome" src={photo} />
        <div className="fullName">
          <h1>Welcome my portfolio</h1>
          <div className="wrapper">
                  <div className="typing-demo">
                  Hi , I am Java developer.
              </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
