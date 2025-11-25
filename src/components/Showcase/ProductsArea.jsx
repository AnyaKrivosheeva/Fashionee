import '../../styles/shop.css'
import { useState } from 'react'
import Pagination from './Pagination'
import SortAndCount from './SortAndCount'
import ProductsList from './ProductsList'

const ProductsArea = (props) => {
    const {
        onToggleFavorite,
        favorites,
    } = props

    const [activePage, setActivePage] = useState(1);

    return (
        <div className='products-wrapper'>
            <SortAndCount />
            <ProductsList activePage={activePage} onToggleFavorite={onToggleFavorite} favorites={favorites} />
            <Pagination activePage={activePage} setActivePage={setActivePage} />
        </div>
    )
}

export default ProductsArea