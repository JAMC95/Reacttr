import React, { Component } from 'react'
import styles from './login.css'

class Login extends Component {
    render () {
        return (
            <div className={styles.root}>
                <p className={styles.text}>
                Necesitamos que inicies sesión con tu cuenta GitHub para poder usar la APP
                </p>
                <button
                    onClick={this.props.onAuth}
                    className={styles.button}>
                   <span className='fa fa-github'> </span> Login con GitHub
                </button>
            </div>
        )
    }
}

export default Login