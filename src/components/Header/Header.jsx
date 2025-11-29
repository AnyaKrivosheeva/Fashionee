import '../../styles/header.css'
import LeftSideHeader from './LeftSideHeader'
import RightSide from './RightSide'

const Header = (props) => {
    const {
        currentPage,
        setCurrentPage,
        favoritesCount,
        cartCount,
    } = props

    return (
        <header className='header'>
            <LeftSideHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <RightSide
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                favoritesCount={favoritesCount}
                cartCount={cartCount} />
        </header>
    )
}

export default Header