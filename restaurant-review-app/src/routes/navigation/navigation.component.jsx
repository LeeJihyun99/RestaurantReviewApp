import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as Logo} from '../../assets/logo.svg';
const Navigation = ()=> {
    return(
        <Fragment>
        <div className="navigation">
        <div className="logo-container">
            <Link className="nav-link" to='/'>
                <Logo/>
            </Link>
        </div>
        <div className="home-container">
            <Link className="nav-link" to='/home'>
            HOME
            </Link>
        </div>
        <div className="about-container">
            <Link className="nav-link" to='/about'>
            ABOUT
            </Link>
        </div>
        </div>
        <Outlet/>
        </Fragment>
        
    )
}

export default Navigation;