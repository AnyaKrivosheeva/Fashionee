import '../../styles/shop.css'
import { useState } from 'react'
import Pagination from './Pagination'
import SortAndCount from './SortAndCount'
import ProductsList from './ProductsList'

const ProductsArea = (props) => {
    const {
        products,
        onToggleFavorite,
        favorites,
        addToCart,
        increaseQty,
        decreaseQty,
        cart,
    } = props

    const [activePage, setActivePage] = useState(1);

    const limit = 9;
    const start = (activePage - 1) * limit;
    const end = start + limit;
    const totalPages = Math.ceil(products.length / limit);

    const visibleProducts = products.slice(start, end);

    return (
        <div className='products-wrapper'>
            <SortAndCount products={products} />
            <ProductsList
                visibleProducts={visibleProducts}
                activePage={activePage}
                onToggleFavorite={onToggleFavorite}
                favorites={favorites}
                addToCart={addToCart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                cart={cart} />
            {visibleProducts.length > 0 && <Pagination activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />}
            {visibleProducts.length === 0 && <p style={{ textAlign: 'center' }}>Sorry, there are no products matching your search.</p>}
        </div>
    )
}

export default ProductsArea