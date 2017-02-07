import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      messages: [{
        text: 'Mensaje del Tweet',
        picture: 'https://pbs.twimg.com/profile_images/805766099631542272/L-G3MNLC_400x400.jpg',
        displayName: 'Jose Antonio Moral',
        username: 'JXMay',
        date: Date.now()
        }]
    }
  }
  render(){
    return (
      <MessageList messages={this.state.messages} />
    )
  }
}

export default Main
