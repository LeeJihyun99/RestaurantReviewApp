import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Home from './routes/home/home.component';
import GoogleButton from 'react-google-button'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

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
