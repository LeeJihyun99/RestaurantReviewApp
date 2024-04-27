import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Home from './routes/home/home.component';
import GoogleButton from 'react-google-button'
// import MicrosoftButton from "react-microsoft-login";
// import AppleButton from "react-apple-login";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/*
//TODO: Bring it into other files


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUpClick = () => {
    // TODO: Implement sign up logic
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className='signup-container'>
      <h2>Create Your Account</h2>
      <input
        type='email'
        value={email}
        onChange={handleEmailChange}
        placeholder='Enter your email'
      />
      <input
        type='password'
        value={password}
        onChange={handlePasswordChange}
        placeholder='Enter your password'
      />
      <button onClick={handleSignUpClick} className='button signup-button'>
        Create Account
      </button>
    </div>
  );
};

*/ 

const About = ()=> (
  <div>
    <h2>About Our Restaurant Review App</h2>
    <p>Welcome to our restaurant review platform! We are dedicated to providing honest and transparent reviews of restaurants around the world. Our team of food enthusiasts visits various restaurants, tastes their offerings, and provides unbiased reviews.</p>
    <p>Our mission is to help food lovers find the best places to eat and drink. We believe in the power of sharing experiences and opinions to create a community of food lovers.</p>
    <p>We appreciate your interest in our platform and look forward to serving you!</p>
  </div>
)

const Login = ()=> (
  <div className='login-container'>
    <h2>Login</h2>
    <p>To start reviewing restaurants and sharing your experiences with other food lovers, please log in to your account. If you don't have an account, you can create one for free!</p>
    <button className='google-button'>
      <GoogleButton/>
    </button>

    
  </div>
)

const App= ()=> {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
    
  );
}


export default App;


library.add(fab, fas, far)

// <button className='apple-button'>
// <AppleButton/>
// </button>
// <button className='microsoft-button'>
// <MicrosoftButton/>
// </button>