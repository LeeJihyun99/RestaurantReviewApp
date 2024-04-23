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
  <h2>This is the about page.</h2>
)
const Login = ()=> (
  <div>
  <h2>This is the login page.</h2>
  <GoogleButton/>
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
