import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import GoogleButton from "react-google-button";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const logGoogleUser = async () => {
        try {
            setIsLoading(true);
            const { user } = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
            setError('');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <h2>Sign-in Page</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <GoogleButton onClick={logGoogleUser} />
            )}
            <SignUpForm />
        </div>
    );
}

export default SignIn;
