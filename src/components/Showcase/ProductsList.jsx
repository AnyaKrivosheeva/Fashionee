import '../../styles/shop.css'
import Product from './Product'

const ProductsList = (props) => {
    const {
        visibleProducts,
        onToggleFavorite,
        favorites,
        addToCart,
        increaseQty,
        decreaseQty,
        cart,
    } = props

    return (
        <div className='products'>
            {visibleProducts.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    onToggleFavorite={onToggleFavorite}
                    isLiked={favorites.includes(product.id)}
                    addToCart={addToCart}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                    cart={cart} />
            ))}
        </div>
    )
}

export default ProductsList