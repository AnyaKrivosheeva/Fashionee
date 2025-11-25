import '../../styles/header.css'
import arrow from '../../assets/icons/arrow.svg'
import arrowRed from '../../assets/icons/arrow-red.svg'

const Menu = (props) => {
    const {
        currentPage,
        setCurrentPage,
    } = props

    return (
        <div className='menu'>
            <div className='menu-item'>
                <span>Home</span>
            </div>
            <div className='menu-item'>
                <span>Pages</span>
                <img src={arrow} alt='Arrow' className='arrow-default' />
                <img src={arrowRed} alt='Arrow' className='arrow-hover' />
            </div>
            <div className={`menu-item ${currentPage === 'Shop' ? 'active' : ''}`}>
                <span onClick={() => setCurrentPage('Shop')}>Shop</span>
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
    )
}

export default Menu