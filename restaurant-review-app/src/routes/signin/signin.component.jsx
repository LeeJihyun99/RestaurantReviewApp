import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import GoogleButton from "react-google-button";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = ()=> {
    const logGoogleUser = async ()=> {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h2>Sign-in Page</h2>
            <GoogleButton onClick={logGoogleUser}/>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;