import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
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
                <Link className='header__link' to='/login'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Hallo Wail</span>
                        <span className='header__optionLineTwo'>Sign In</span>
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
                        <span className='header__optionLineTwo header__basketCount'>0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header