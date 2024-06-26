import { Outlet, Link} from 'react-router-dom'

import { React } from 'react'
import './navigation.scss'


const Navigation = () => {
    return (
      <>
        <div className='navigation'>
        <Link className='logo-container' to='/'>
            <h1>Logo</h1>
        </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/signIn'>
                    SIGN IN
                </Link>
          </div>
        </div>
        <Outlet />
      </>
    )
  } 

  export default Navigation