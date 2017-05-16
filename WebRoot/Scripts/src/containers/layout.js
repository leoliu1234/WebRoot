import React, { PropTypes } from 'react';
import Menu from '../components/layout/menu';
import Header from '../components/layout/header';

export default function Layout(props) {
    return (<div id="layout">
        <Header/>
        <Menu />
        {props.children}
        <footer className="footer">&copy; 2017 Leo  </footer>
    </div>);
}