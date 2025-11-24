import '../../styles/shop.css'
import { useState } from 'react'
import Pagination from './Pagination'
import SortAndCount from './SortAndCount'
import ProductsList from './ProductsList'

const ProductsArea = () => {
    const [activePage, setActivePage] = useState(1);

    return (
        <div className='products-wrapper'>
            <SortAndCount />
            <ProductsList activePage={activePage} />
            <Pagination activePage={activePage} setActivePage={setActivePage} />
        </div>
    )
}

export default ProductsArea