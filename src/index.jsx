import React from 'react'
import {render} from 'react-dom'
import firebase from 'firebase'

import App from './components/App'

;
  firebase.initializeApp({
    apiKey: "AIzaSyAcUx7JEO3neY5cJUm1REOJTR1D1NTi5pY",
    authDomain: "curso-react-be2a2.firebaseapp.com",
    databaseURL: "https://curso-react-be2a2.firebaseio.com",
    storageBucket: "curso-react-be2a2.appspot.com",
    messagingSenderId: "649331839011"
  
  });

render(<App />, document.getElementById('root'))
