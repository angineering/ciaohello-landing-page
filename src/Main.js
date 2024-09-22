import React, { Component } from 'react'
import Screenshot from './static/images/screenshot.png'
import Testimonial from './components/Testimonial'
import DarrenImg from './static/images/Darren.png'
import GinaImg from './static/images/Gina.png'
import MaryamImg from './static/images/maryam.png'
import AntlerLogo from './static/images/AntlerLogo.png'
import InnovatorsRoom from './static/images/InnovatorsRoom.png'
import RC from './static/images/RCLogo.png'

export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <header className="App-header">
          <div>
          <h1>Remember to Slack your colleagues</h1>
          <h4>
            Keep track of how many colleagues you've spoken to lately,
            and who it's time to reach out to again.
          </h4>
          <br></br>
          <a href="https://slack.com/oauth/v2/authorize?client_id=1052632707317.1057131634261&scope=chat:write,files:write,users:read&user_scope=im:read"><img alt="Add to Slack" height="45" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/></a>
          </div>
          <div>
            <img className="screenshot" src={ Screenshot } alt="screenshot of Chatty app" />
          </div>
        </header>
        <section className="logos">
          <img src={ AntlerLogo } alt="Antler logo" id='antler-logo'/>
          <img src={ InnovatorsRoom } alt="InnovatorsRoom logo" id='ir-logo' />
          <img src={ RC } alt="Retail Collective logo" id='rc-logo' />
        </section>
        <section className="boxes">
          
        </section>
      </div>
    )
  }
}