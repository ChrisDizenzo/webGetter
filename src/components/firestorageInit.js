import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC2PAcPCc1s_y4o6npodHXdyHc5TdlV2xM",
    authDomain: "vuewebcams.firebaseapp.com",
    databaseURL: "https://vuewebcams.firebaseio.com",
    projectId: "vuewebcams",
    storageBucket: "vuewebcams.appspot.com",
    messagingSenderId: "959286342200",
    appId: "1:959286342200:web:1766b8855492c507286ccd"
  };
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase.storage();