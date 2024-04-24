import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './navigation.styles.scss';



const Navigation = ()=> {
    return(
        <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <Logo/>
            </Link>
        <div className="navigation-bar-container">
            <div className="nav-link-container">
            <Link className="nav-link" to='/'>
            HOME
            </Link>
            </div>
            <div className="nav-link-container">
            <Link className="nav-link" to='/about'>
            ABOUT
            </Link>
            </div>

            <div className="nav-link-container">
            <Link className="nav-link" to='/login'>
            LOGIN
            </Link>
            </div>
        </div>
        
        </div>
        <Outlet/>
        </Fragment>
        
    )
}

export default Navigation;