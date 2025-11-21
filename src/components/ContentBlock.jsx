import '../styles/commons.css'
import verticalLine from '../assets/images/vertical-line.svg'
import points322 from '../assets/images/points322.svg'

const ContentBlock = (props) => {
    const {
        currentPage,
        setCurrentPage,
    } = props

    return (
        <div className='page-header-wrapper'>
            <div className='page-header-menu'>
                <div className='page-info'>
                    <div className='title'>{currentPage}</div>
                    <div className='menu-items'>
                        <div className='vertical-line'>
                            <img src={verticalLine} alt='Vertical line' />
                        </div>
                        <div className={`menu-item ${currentPage === 'Cart' ? 'active' : ''}`}>
                            <span onClick={() => setCurrentPage('Cart')}>Cart</span>
                        </div>
                        <div className={`menu-item ${currentPage === 'Shop' ? 'active' : ''}`}>
                            <span onClick={() => setCurrentPage('Shop')}>Shop</span>
                        </div>
                    </div>
                </div>
                <div className='line-decoration'></div>
                <div className='points-header-decoration'>
                    <img src={points322} alt='Points decoration' />
                </div>
            </div>
            <div className='photo-header'></div>
        </div>
    )
}

export default ContentBlock