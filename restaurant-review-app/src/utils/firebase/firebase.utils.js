import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK5oE_xJ5pjCVqjVf9vQzeHCFrBxzYY5U",
    authDomain: "restaurant-review-app-ddfe8.firebaseapp.com",
    projectId: "restaurant-review-app-ddfe8",
    storageBucket: "restaurant-review-app-ddfe8.appspot.com",
    messagingSenderId: "979749941704",
    appId: "1:979749941704:web:5a0f72076a1757f77690fd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

// Set up Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

// Export sign-in function
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Export sign-out function
export const signOutUser = () => signOut(auth);

// Export user creation function
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
};
