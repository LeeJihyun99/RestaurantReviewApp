import { useState, useEffect } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signOutUser, auth } from "../../utils/firebase/firebase.utils";
import GoogleButton from "react-google-button";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { onAuthStateChanged } from 'firebase/auth';

const SignIn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

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
    };

    const handleSignOut = async () => {
        try {
            await signOutUser();
            setUser(null);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>Sign-in Page</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isLoading ? (
                <p>Loading...</p>
            ) : user ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <GoogleButton onClick={logGoogleUser} />
            )}
            <SignUpForm />
        </div>
    );
};

export default SignIn;
