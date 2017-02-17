import React, { Component } from 'react'
import moment from 'moment'
import styles from './messages.css'

class Message extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      pressFavorite: false,
      onPressRetweet: false

    }

    this.onPressRetweet = this.onPressRetweet.bind(this)
    this.onPressFavorite = this.onPressFavorite.bind(this)
  }
  onPressFavorite(){
    this.props.onFavorite()
    this.setState({
      pressFavorite: true

    })
  }
  onPressRetweet(){
  this.props.onRetweet()
    this.setState({
      pressFavorite: true

    })
  }
render () {
  let dateFormat = moment(this.props.date).fromNow()

  return (<div className={styles.root}>
    <div className={styles.user}></div>
    <figure>
      <img className={styles.avatar} src={this.props.picture}/>
    </figure>
    <span className={styles.displayName}>{this.props.displayName}</span>
    <span className={styles.username}>{this.props.username}</span>
    <span className={styles.date}>{dateFormat}</span>
    <h3>{this.props.text}</h3>
    <div className={styles.buttons}>
      <div className={styles.icon}>
        <span className='fa fa-reply'></span>
        
      </div>
      <div
       className={(this.state.onPressRetweet)? styles.rtGreen : ''}
       onClick={this.props.onPressRetweet}
       >
        <span className='fa fa-retweet'></span>
        <span className={styles.num}>{this.props.numRetweets}</span>
      </div>
      <div
       className={(this.state.pressFavorite)? styles.faveYello : ''}
       onClick={this.props.onPressFavorite}
       >
        <span className='fa fa-star'></span>
        <span className={styles.num}>{this.props.numFavorites}</span>
      </div>
    </div>
  </div>
    )
  }

}
export default Message
