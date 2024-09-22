import React, { Component } from 'react'
import Screenshot from './static/images/screenshot.png'


export default class Main extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
        <h1>Main call to action</h1>
        <h4>
          A short description of why your app is amazing and what it does
        </h4>
        <br></br>
        <a href="SLACK URL HERE"><img alt="Add to Slack" height="45" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/></a>
        </div>
        <div>
          <img src={ Screenshot } alt="screenshot of app here" />
        </div>
      </header>
    )
  }
}
