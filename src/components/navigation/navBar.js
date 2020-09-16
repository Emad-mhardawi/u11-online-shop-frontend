import React from 'react'
import './navBar.css';
import { Link} from 'react-router-dom';

const navBar = () => {
    return (
        <div className="nav">

        <div className='side-nav-button'>
           
         </div>
     <div className= 'nav-items'>
        
        
         <h1 className= 'logo'>EMAD</h1>
         <ul className= 'nav-links'>
             <Link  className= 'nav-link' to={'/'}>
                 <li>Home</li>
             </Link>
             
             <Link  className= 'nav-link' to={'/shop'}>
                 <li>Shop</li>
             </Link>

             <Link  className= 'nav-link' to={'/about'}>
                 <li>about us</li>
             </Link>

             <Link  className= 'nav-link' to={'/contact'}>
                 <li>contact</li>
             </Link>

             <Link className= 'nav-link'  to={'/admin-dash'}>
                 <li>DashBoard</li>
             </Link>
         </ul>


         <div className ='nav-items-right'> 
             <Link  to = {'/login'} className= 'login-signup'>
                 <h4> login </h4>
             </Link> / 
             <Link  to = {'/signup'} className= 'login-signup'>
                 <h4> signup  </h4>
             </Link>

             <Link to = {'/cart'}>
             <div className= 'cart'>
             <svg className='cart-icon' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672
              1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5
               1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828
               0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671
                1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432
                12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                <span className='cart-number'>0</span>
                </div>
                </Link>
                
             </div>

     </div>
   </div>

    )
}

export default navBar
