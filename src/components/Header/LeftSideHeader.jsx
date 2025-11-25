import '../../styles/header.css'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'
import Menu from './Menu'

const LeftSideHeader = (props) => {
    const {
        currentPage,
        setCurrentPage,
    } = props

    return (
        <div className='left-side'>
            <div className='logo-container'>
                <BurgerMenu />
                <Logo />
            </div>
            <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default LeftSideHeader
