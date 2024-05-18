import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
 } from 'firebase/auth';

 import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
  } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBibGqxTpTFHGseBngnNd3qAuWbKBNFEeU",
    authDomain: "crown-clothing-db-62809.firebaseapp.com",
    projectId: "crown-clothing-db-62809",
    storageBucket: "crown-clothing-db-62809.appspot.com",
    messagingSenderId: "194449264649",
    appId: "1:194449264649:web:bd86c4fa37d311d139a8d8"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot)

    if(!userSnapShot.exists()) {
      const { displayName, email } = userAuth
      const createAt = new Date()

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt
        })
      } catch (error) {
        console.log('error creating the user', error.message)
      }
    }
  }

