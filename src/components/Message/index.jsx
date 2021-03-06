import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import styles from './messages.css'

const propTypes = {
  
  date: PropTypes.number.isRequiered,
  username: PropTypes.string.isRequiered,
  picture: PropTypes.string.isRequiered,
  displayName: PropTypes.string.isRequiered,
  text: PropTypes.string.isRequiered,
  numRetweets: PropTypes.number.isRequiered,
  numFavorites: PropTypes.number.isRequiered,
  onReplyTweet: PropTypes.func.isRequiered,
  onFavorite: PropTypes.func.isRequiered,
  onRetweet: PropTypes.func.isRequiered

}

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
      pressRetweet: true

    })
  }
  
render () {
  let dateFormat = moment(this.props.date).fromNow()
  let userLink = `/user/${this.props.username}`

  return (<div className={styles.root}>
    <div className={styles.user}></div>
    <Link to={userLink}>
    <figure>
      <img className={styles.avatar} src={this.props.picture}/>
    </figure>
    </Link>
    <span className={styles.displayName}>{this.props.displayName}</span>
    <span className={styles.username}>{this.props.username}</span>
    <span className={styles.date}>{dateFormat}</span>
    <h3>{this.props.text}</h3>
    <div className={styles.buttons}>
      <div 
        className={styles.icon}
        onClick={this.props.onReplyTweet}
        >
        <span className='fa fa-reply'
        
        ></span>
        
      </div>
      <div
       className={(this.state.pressRetweet) ? styles.rtGreen : ''}
       onClick={this.onPressRetweet}
       >
        <span className='fa fa-retweet'></span>
        <span className={styles.num}>{this.props.numRetweets}</span>
      </div>
      <div
       className={(this.state.pressFavorite) ? styles.favYellow : ''}
       onClick={this.onPressFavorite}
       >
        <span className='fa fa-star'></span>
        <span className={styles.num}>{this.props.numFavorites}</span>
      </div>
    </div>
  </div>
    )
  }

}

Message.PropTypes = PropTypes

export default Message
