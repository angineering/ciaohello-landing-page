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
            powered by AI. Coming soon...
          </h1>
          </div>          
        </header>
      </div>
    )
  }
}