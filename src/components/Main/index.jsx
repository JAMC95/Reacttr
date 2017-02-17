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
        id: uuid.v4(),
        text: 'Mensaje del Tweet',
        picture: 'https://pbs.twimg.com/profile_images/805766099631542272/L-G3MNLC_400x400.jpg',
        displayName: 'Jose Antonio Moral',
        username: 'joxe.bailen',
        date: Date.now() - 180000,
        retweets: 0,
        favorites: 0
      },
      {
           id: uuid.v4(),
          text: 'Mensaje viejo',
          picture: 'https://pbs.twimg.com/profile_images/805766099631542272/L-G3MNLC_400x400.jpg',
          displayName: 'Jose Antonio Moral',
          username: 'joxe.bailen',
          date: Date.now() - 298888,
          retweets: 0,
          favorites: 0
          }
        ]


    }

    this.handleSendText = this.handleSendText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
  }
handleSendText(event){
  event.preventDefault()
  let newMessage = {
    id: uuid.v4(),
    username: this.props.user.email.split('@')[0],
    text: event.target.text.value,
    displayName: this.props.user.displayName,
    picture: this.props.user.photoURL,
    date: Date.now(),
    
  }
  this.setState({
    messages: this.state.messages.concat(newMessage),
    openText: false
  })
}
handleCloseText(event){
  event.preventDefault()
  this.setState({openText:false})
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
      <MessageList 
      messages={this.state.messages}
      onRetweet={this.handleRetweet}
      onFavorite={this.handleFavorite}
       />
      </div>
    )
  }
}

export default Main
