import React, { Component } from 'react'

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  render (){
    return (
      <div>
        {this.props.messages.map(msg => {
          return (
            <Message text= {msg.text} />
          )
        })}
      </div>
    )
  }
}

export default MessageList
