import '../../styles/header.css'
import search from '../../assets/icons/search.svg'
import user from '../../assets/icons/user.svg'
import favorites from '../../assets/icons/heart.svg'
import cartIcon from '../../assets/icons/cart.svg'

const RightSide = (props) => {
    const {
        currentPage,
        setCurrentPage,
        favoritesCount,
    } = props

    return (
        <div className='right-side'>
            <div className='header-icon'>
                <img src={search} alt='Search' />
            </div>
            <div className='header-icon'>
                <img src={user} alt='Profile' />
            </div>
            <div className='header-icon'>
                <img src={favorites} alt='Favorites' />
                <div className='counter'>{favoritesCount}</div>
            </div>
            <div className='header-icon' onClick={() => setCurrentPage('Cart')}>
                <img src={cartIcon} alt='Cart' />
                <div className='counter'>2</div>
            </div>
        </div>
    )
}

export default RightSide