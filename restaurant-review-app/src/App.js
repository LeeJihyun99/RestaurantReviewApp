import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";

const Home = ()=> (
  <div>It should show all the components of the Homepage.</div>
)

const About = ()=> (
  <div>About</div>
)
const Login = ()=> (
  <div>Login</div>
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
