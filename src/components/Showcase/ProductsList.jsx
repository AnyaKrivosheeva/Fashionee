import '../../styles/shop.css'
import data from '../../assets/products.json'
import Product from './Product'

const ProductsList = (props) => {
    const {
        activePage,
        onToggleFavorite,
        favorites,
    } = props

    const products = data.products;

    const limit = 12;
    const start = (activePage - 1) * limit;
    const end = start + limit;

    const visibleProducts = products.slice(start, end);

    return (
        <div className='products'>
            {visibleProducts.map(product => (
                <Product key={product.id} product={product} onToggleFavorite={onToggleFavorite} isLiked={favorites.includes(product.id)} />
            ))}
        </div>
    )
}

export default ProductsList