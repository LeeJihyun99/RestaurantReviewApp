import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore,doc,getDoc,setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBK5oE_xJ5pjCVqjVf9vQzeHCFrBxzYY5U",
    authDomain: "restaurant-review-app-ddfe8.firebaseapp.com",
    projectId: "restaurant-review-app-ddfe8",
    storageBucket: "restaurant-review-app-ddfe8.appspot.com",
    messagingSenderId: "979749941704",
    appId: "1:979749941704:web:5a0f72076a1757f77690fd",
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth(firebaseApp);
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){

        //if user data does not exist
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }};

        return userDocRef;
  }