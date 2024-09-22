import React, { Component } from 'react'
import Screenshot from './static/images/screenshot.png'

export default class Main extends Component {
  render() {
    return (
      <div id="main" style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #FFA500, #D56AFA)'
      }}>
        <header className="App-header">
          <div>
          <h1>Ciao Hello</h1>
          <h4>
            A new way to learn a language coming soon...
          </h4>
          <br></br>
          <a href="https://slack.com/oauth/v2/authorize?client_id=1052632707317.1057131634261&scope=chat:write,files:write,users:read&user_scope=im:read"><img alt="Add to Slack" height="45" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/></a>
          </div>
          <div>
            <img className="screenshot" src={ Screenshot } alt="screenshot of Chatty app" />
          </div>
        </header>
      </div>
    )
  }
}