import React, {Component} from 'react'
import { HashRouter, Match } from 'react-router'

import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'

class App extends Component{
  constructor(){
    super()

    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/805766099631542272/L-G3MNLC_400x400.jpg',
        email: 'joxe.bailen@gmail.com',
        onOpenText: false,
        displayName: 'Jose Antonio Moral',
        location: 'España'
      }
    }
  }
  render() {
    return(
      <HashRouter>
      <div>
        <Header />
        <Match exactyly pattern='/' render={() => {
          if (this.state.user) {
            return (
              <Main user={this.state.user}/>
            )
          }else{
            // Render <Login />
          }
        }} />
        
        <Match pattern='/profile' render={() => {
          <Profile 
            picture={this.state.user.photoURL}
            username={this.state.user.email.split('@')[0]}
            displayName={this.state.user.displayName}
            location={this.state.user.location}
            emailAddress={this.state.user.email}
          />
        }} />

        <Match pattern='/user/:username' render ={( { params }) => {
          // Render <Profile /> pasando params.username
        }}/>
      </div>
      </HashRouter>
    )
  }
}
export default App
