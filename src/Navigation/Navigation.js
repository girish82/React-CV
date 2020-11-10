import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Education from '../Education/Education';
import Experiance from '../Experiance/Experiance';
import General from '../General/General';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.css';
import Summary from '../Summary/Summary';


const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><NavLink className="navClass" activeClassName="navActive" to="/General">General</NavLink></li>
                    <li><NavLink className="navClass" activeClassName="navActive" to="/Education">Education</NavLink></li>
                    <li><NavLink className="navClass"  activeClassName="navActive" to="/Experiance">Experiance</NavLink></li>
                    <li><NavLink  className="navClass" activeClassName="navActive" to="/Summary">Summary</NavLink></li>
                </ul>
            </nav>
            <Route path="/General" component={General} exact></Route>
            <Route path="/Education" component={Education} exact></Route>
            <Route path="/Experiance" component={Experiance} exact></Route>
            <Route path="/Summary" component={Summary} exact></Route>

        </div>
    )
}

export default Navigation