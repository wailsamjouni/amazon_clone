import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();

        }
    }

    return (
        <nav className='header'>
            <Link to='/' >
                <img
                    className='header__logo'
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <div className="header__search">
                <input
                    type="text"
                    className="header__searchInput"
                    placeholder='Suche Amazon.de'
                />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <Link className='header__link' to={!user && '/login'}>
                    <div
                        onClick={login}
                        className="header__option">
                        <span className='header__optionLineOne'>Hallo {user?.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link className='header__link' to='/'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link className='header__link' to='/'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
                <Link className='header__link' to='/checkout'>
                    <div className="header__basket">
                        <ShoppingBasketIcon className='header__basketIcon' />
                        <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header