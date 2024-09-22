import React, { Component } from 'react'
import Screenshot from './static/images/logo.png'

export default class Main extends Component {
  render() {
    return (
      <div id="main" style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #FFA500, #D56AFA)'
      }}>
        <header className="App-header">
          <div style={{ width: '40%', height: '50%' }}>
            <img  
              src={ Screenshot } 
              style={{ maxWidth: '100%', height: 'auto' }}
              alt="Ciao Hello logo"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          {/* <h1>Ciao Hello</h1> */}
          <h1 
          style={{ 
            fontSize: '2.5rem', 
            fontWeight: '500', 
            fontStyle: 'italic', 
            fontFamily: 'Libre Baskerville',
            margin: 0
          }}
          >
            A new way to learn a language,<br/>
            coming soon...
          </h1>
          {/* <a href="https://slack.com/oauth/v2/authorize?client_id=1052632707317.1057131634261&scope=chat:write,files:write,users:read&user_scope=im:read"><img alt="Add to Slack" height="45" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/></a> */}
          </div>
          
        </header>
      </div>
    )
  }
}