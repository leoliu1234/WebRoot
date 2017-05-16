import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
    render() {
        return (<div id="menu">
            <div className="pure-menu">
                <Link to="/App" className="pure-menu-heading">App</Link>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected">
                        <Link to="/Home" className="pure-menu-link">My Gallery</Link>
                    </li>
                    <li className="pure-menu-item">
                        <Link to="/Favorite" className="pure-menu-link">Favorite</Link>
                    </li>
                    <li className="pure-menu-item menu-item-divided">
                        <a href="/base/" className="pure-menu-link">Private</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/grids/" className="pure-menu-link">Grids</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/forms/" className="pure-menu-link">Forms</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/buttons/" className="pure-menu-link">Buttons</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/tables/" className="pure-menu-link">Tables</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/menus/" className="pure-menu-link">Menus</a>
                    </li>
                    <li className="pure-menu-item menu-item-divided">
                        <a href="/tools/" className="pure-menu-link">Tools</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/customize/" className="pure-menu-link">Customize</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="/extend/" className="pure-menu-link">Extend</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="http://blog.purecss.io/" className="pure-menu-link">Blog</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="https://github.com/yahoo/pure/releases/" className="pure-menu-link">Releases</a>
                    </li>
                </ul>
            </div>
        </div>);
    }
}