import React from 'react';
import './header.css';
import logo from '../logo512.png';
import Clock from './Clock';

export default class Header extends React.Component{
    render(props){
        const {name, lastname} = this.props;
        return (
            <>
                <h1>Hello {name} {lastname}</h1>
                <img src={logo} alt=''/>
                <p>{this.props.calc}</p>
                <Clock />
            </>
        );
    }
}