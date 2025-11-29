import '../../styles/cart.css'
import data from '../../assets/products.json'
import ProductItemCart from './ProductItemCart'

const ProductsListCart = (props) => {
    const {
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart,
    } = props

    const productsData = data.products;

    const CartProducts = cart.map((item) => {
        return {
            ...productsData.find(product => product.id === item.id), quantity: item.quantity
        };

    });

    return (
        <div className='products-list'>
            {CartProducts.map(product => (
                <ProductItemCart
                    key={product.id}
                    product={product}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                    removeFromCart={removeFromCart} />
            ))}
        </div>
    )
}

export default ProductsListCart