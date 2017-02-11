import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      openText: false,
      messages: [
        {
        text: 'Mensaje del Tweet',
        picture: 'https://pbs.twimg.com/profile_images/805766099631542272/L-G3MNLC_400x400.jpg',
        displayName: 'Jose Antonio Moral',
        username: 'JXMay',
        date: Date.now() - 180000
      },
      {

          text: 'Mensaje viejo',
          picture: 'https://pbs.twimg.com/profile_images/805766099631542272/L-G3MNLC_400x400.jpg',
          displayName: 'Jose Antonio Moral',
          username: 'JXMay',
          date: Date.now() - 298888
          }
        ]


    }

    this.handleSendText = this.handleSendText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
  }

  handleOpenText(event){
    event.preventDefault()
    this.setState({openText: true})
  }
renderOpenText(){
  if(this.state.openText){
    return (
      <InputText
        onSendText={this.handleSendText}
        onCloseText={this.handleCloseText}
        />
    )
  }
}
  render(){
    return (
      <div>
      <ProfileBar
        picture={this.props.user.photoURL}
        username={this.props.user.email.split('@')[0]}
        onOpenText={this.handleOpenText}
      />
    {this.renderOpenText()}
      <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main
