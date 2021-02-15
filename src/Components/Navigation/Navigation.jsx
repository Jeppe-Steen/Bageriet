import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Style from './Navigation.module.scss';

export function Navigation() {

    let location = useLocation();

    let bgColor;

    if(location.pathname === '/Forside') {
        bgColor = {
            backgroundColor: 'transparent'
        }
    } else {
        bgColor = {
            backgroundColor: 'rgb(35, 108, 156)'
        }
    }


    return (
        <nav style={bgColor} className={Style.navigation}>
            <ul>
                <li><Link className={Style.links} to="/Forside">Forside</Link></li>
                <li><Link className={Style.links} to="/Produkter">Produkter</Link></li>
                <li className={Style.logo}>Bageriet</li>
                <li><Link className={Style.links} to="/Kontakt">Kontakt</Link></li>
                <li><Link className={Style.links} to="/Login">Login</Link></li>
            </ul>
        </nav>
    )
}