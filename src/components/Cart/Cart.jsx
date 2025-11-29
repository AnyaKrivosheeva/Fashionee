import '../../styles/cart.css'
import PromoCodeBlock from './PromoCodeBlock'
import Order from './Order'
import ProductsListCart from './ProductsListCart';


const Cart = (props) => {
    const {
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart,
    } = props
    return (
        <div className='container'>
            <div className='cart'>
                <div className='order-wrapper'>
                    <ProductsListCart
                        increaseQty={increaseQty}
                        decreaseQty={decreaseQty}
                        removeFromCart={removeFromCart}
                        cart={cart} />
                    <Order cart={cart} />
                </div>
                <PromoCodeBlock />
            </div>
        </div>
    )
}

export default Cart