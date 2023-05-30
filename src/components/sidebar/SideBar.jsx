import './SideBar.css';

import { Link } from "react-router-dom";


const SideBar = (props) => {
    return (
        <div className={props.className} id='nav-tab'>
            <nav className="nav flex-column">
                { props.children }
            </nav>

       </div>
    )
}

export default SideBar;
