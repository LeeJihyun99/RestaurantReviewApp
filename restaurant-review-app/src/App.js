import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Home from './routes/home/home.component';
import GoogleButton from 'react-google-button'

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
