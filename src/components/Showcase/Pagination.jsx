import '../../styles/shop.css'
import { useState, useEffect } from 'react'
import leftPaginArrow from '../../assets/icons/left-pagin-arrow.svg'
import rightPaginArrow from '../../assets/icons/right-pagin-arrow.svg'

const Pagination = (props) => {
    const {
        activePage,
        setActivePage,
        totalPages,
    } = props

    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        const tempPagination = [];

        for (let i = 0; i < totalPages; i++) {
            tempPagination.push(i + 1)
        }

        setPagination(tempPagination)
    }, [totalPages]);

    const handlePrev = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
        }
    };

    const handleNext = () => {
        if (activePage < pagination.length) {
            setActivePage(activePage + 1);
        }
    };

    return (
        <div className='pagination'>
            <div className='button-left' onClick={handlePrev}>
                <img src={leftPaginArrow} alt='Arrow left' />
            </div>
            <div className='pages'>
                {pagination.map((page) => (
                    <div key={page} className={`page ${activePage === page ? 'active' : ''}`} onClick={() => setActivePage(page)}>{page}</div>
                ))}
            </div>
            <div className='button-right' onClick={handleNext}>
                <img src={rightPaginArrow} alt='Arrow right' />
            </div>
        </div>
    )
}

export default Pagination