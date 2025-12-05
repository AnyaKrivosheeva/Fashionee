import '../../styles/shop.css'
import { useState } from 'react'
import data from '../../assets/products.json'
import Pagination from './Pagination'
import SortAndCount from './SortAndCount'
import ProductsList from './ProductsList'

const ProductsArea = (props) => {
    const {
        searchValue,
        onToggleFavorite,
        favorites,
        addToCart,
        increaseQty,
        decreaseQty,
        cart,
    } = props

    const [activePage, setActivePage] = useState(1);

    const products = data.products;

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const limit = 9;
    const start = (activePage - 1) * limit;
    const end = start + limit;
    const totalPages = Math.ceil(filtered.length / limit);

    const visibleProducts = filtered.slice(start, end);

    return (
        <div className='products-wrapper'>
            <SortAndCount filteredProducts={filtered}/>
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