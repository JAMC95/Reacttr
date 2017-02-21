import React, {Component} from 'react'
import { HashRouter, Match } from 'react-router'
import firebase from 'firebase'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

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
    this.handleOnAuth = this.handleOnAuth.bind(this)
  }
  handleOnAuth () {
    const provider = new firebase.auth.GithubAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error: ${error.message}`))
  }

  render() {
    return(
      <HashRouter>
        <div>
        <Header />

        <Match exactly pattern='/' render={() => {
          if (this.state.user) {
            return (
              <Main user={this.state.user}/>
            )
          }else{
            return (
              <Login onAuth={this.handleOnAuth} />
            )
          }
        }} />
        
        <Match pattern='/profile' render={() => {
          return (
            <Profile
              picture={this.state.user.photoURL}
              username={this.state.user.email.split('@')[0]}
              displayName={this.state.user.displayName}
              location={this.state.user.location}
              emailAddress={this.state.user.email}
            />
          )
        }} />

        <Match pattern='/user/:username' render ={( { params }) => {
          return (
            <Profile
              displayName={params.username}
              username={params.username}
            />
          )
        }} />
      </div>
      </HashRouter>
    )
  }
}
export default App
