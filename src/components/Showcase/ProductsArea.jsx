import '../../styles/shop.css'
import { useState } from 'react'
import data from '../../assets/products.json'
import Pagination from './Pagination'
import SortAndCount from './SortAndCount'
import ProductsList from './ProductsList'

const ProductsArea = (props) => {
    const {
        onToggleFavorite,
        favorites,
        addToCart,
        increaseQty,
        decreaseQty,
        cart,
    } = props

    const [activePage, setActivePage] = useState(1);

    const products = data.products;

    const limit = 9;
    const start = (activePage - 1) * limit;
    const end = start + limit;
    const totalPages = Math.ceil(products.length / limit);

    const visibleProducts = products.slice(start, end);

    return (
        <div className='products-wrapper'>
            <SortAndCount />
            <ProductsList
                visibleProducts={visibleProducts}
                activePage={activePage}
                onToggleFavorite={onToggleFavorite}
                favorites={favorites}
                addToCart={addToCart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                cart={cart} />
            <Pagination activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />
        </div>
    )
}

export default ProductsArea