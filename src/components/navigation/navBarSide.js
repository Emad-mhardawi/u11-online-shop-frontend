import React from 'react'
import { Link } from 'react-router-dom';
import './navBarSide.css';

const navBarSide = (props) => {
    let sideNavClasses = 'navbarSide'
    if (props.isShow) {
        sideNavClasses = 'navbarSide open'
    }
    return (
        <div className={sideNavClasses} >
            <ul className='navside-links'>
                <Link onClick={props.menuHandler} className='navside-link' to={'/'}>
                    <li>Home</li>
                </Link>

                <Link onClick={props.menuHandler} className='navside-link' to={'/shop'}>
                    <li>Shop</li>
                </Link>

                <Link onClick={props.menuHandler} className='navside-link' to={'/about'}>
                    <li>about us</li>
                </Link>

                <Link onClick={props.menuHandler} className='navside-link' to={'/contact'}>
                    <li>contact</li>
                </Link>

                <Link onClick={props.menuHandler} className='navside-link' to={'/admin-dash'}>
                    <li>DashBoard</li>
                </Link>
            </ul>

        </div>
    )
}

export default navBarSide
