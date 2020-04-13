const firebase = require('firebase/app')

// Add the Firebase products that you want to use
require('firebase/auth')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: 'AIzaSyBTezW_cHKfbqUYRqpxq1M0K0-SAuSi8vg',
  authDomain: 'passwordless-c5c46.firebaseapp.com',
  databaseURL: 'https://passwordless-c5c46.firebaseio.com',
  projectId: 'passwordless-c5c46',
  storageBucket: 'passwordless-c5c46.appspot.com',
  messagingSenderId: '439242595214',
  appId: '1:439242595214:web:318dda5033b1110d69e2df',
  measurementId: 'G-HXHB2ZHMMR',
}

firebase.initializeApp(firebaseConfig)

module.exports = firebase
