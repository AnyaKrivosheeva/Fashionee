import '../styles/header.css'
import logo from '../assets/icons/logo.svg'
import arrow from '../assets/icons/arrow.svg'
import arrowRed from '../assets/icons/arrow-red.svg'
import search from '../assets/icons/search.svg'
import user from '../assets/icons/user.svg'
import favorites from '../assets/icons/heart.svg'
import cartIcon from '../assets/icons/cart.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className='left-side'>
                <div className='logo-container'>
                    <div className='burger-menu'>
                        <input type='checkbox' id='burger-checkbox' className='burger-checkbox' />
                        <label className='burger' for='burger-checkbox'></label>
                    </div>
                    <div className='logo'>
                        <img src={logo} alt='Logo' />
                    </div>
                </div>
                <div className='menu'>
                    <div className='menu-item'>
                        <span>Home</span>
                    </div>
                    <div className='menu-item'>
                        <span>Pages</span>
                        <img src={arrow} alt='Arrow' className='arrow-default' />
                        <img src={arrowRed} alt='Arrow' className='arrow-hover' />
                    </div>
                    <div className='menu-item active'>
                        <span>Shop</span>
                        <img src={arrow} alt='Arrow' className='arrow-default' />
                        <img src={arrowRed} alt='Arrow' className='arrow-hover' />
                    </div>
                    <div className='menu-item blog'>
                        <span>Blog</span>
                    </div>
                    <div className='menu-item contact'>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
            <div className='right-side'>
                <div className='header-icon'>
                    <img src={search} alt='Search' />
                </div>
                <div className='header-icon'>
                    <img src={user} alt='Profile' />
                </div>
                <div className='header-icon'>
                    <img src={favorites} alt='Favorites' />
                    <div className='counter'>0</div>
                </div>
                <div className='header-icon'>
                    <img src={cartIcon} alt='Cart' />
                    <div className='counter'>0</div>
                </div>
            </div>
        </header>
    )
}

export default Header