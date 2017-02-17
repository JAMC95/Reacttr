import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: Object.assign({}, this.props.user, { retweets: []}, {favorites: []}),
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
    this.handleRetweet = this.handleRetweet.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
  }
  handleRetweet(msgId){
    let alreadyRetweeted = this.state.user.retweets.filter(rt => rt === msgId)

    if(alreadyRetweeted.length === 0){
      let messages = this.state.messages.map(msg => {
        if(msg.id == msgId){
          msg.retweets++
        }
        return msg
      })
      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }

  handleFavorite(msgId){
    let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)

    if(alreadyFavorited.length === 0){
      let messages = this.state.messages.map(msg => {
        if(msg.id === msgId){
          msg.favorites++
        }
        return msg
      })
      let user = Object.assign({}, this.state.user)
      user.favorites.push(msgId)

      this.setState({
        messages,
        user
      })
    }
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
