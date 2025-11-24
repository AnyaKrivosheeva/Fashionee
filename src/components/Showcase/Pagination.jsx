import '../../styles/shop.css'
import leftPaginArrow from '../../assets/icons/left-pagin-arrow.svg'
import rightPaginArrow from '../../assets/icons/right-pagin-arrow.svg'

const Pagination = (props) => {
    const {
        activePage,
        setActivePage,
    } = props

    const pages = [1, 2, 3];

    const handlePrev = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
        }
    };

    const handleNext = () => {
        if (activePage < pages.length) {
            setActivePage(activePage + 1);
        }
    };

    return (
        <div className='pagination'>
            <div className='button-left' onClick={handlePrev}>
                <img src={leftPaginArrow} alt='Arrow left' />
            </div>
            <div className='pages'>
                {pages.map((page, index) => (
                    <div key={index} className={`page ${activePage === page ? 'active' : ''}`} onClick={() => setActivePage(page)}>{page}</div>
                ))}
            </div>
            <div className='button-right' onClick={handleNext}>
                <img src={rightPaginArrow} alt='Arrow right' />
            </div>
        </div>
    )
}

export default Pagination