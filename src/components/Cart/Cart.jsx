import '../../styles/cart.css'
import PromoCodeBlock from './PromoCodeBlock'
import Order from './Order'
import ProductsListCart from './ProductsListCart';


const Cart = () => {
    return (
        <div className='container'>
            <div className='cart'>
                <div className='order-wrapper'>
                    <ProductsListCart />
                    <Order />
                </div>
                <PromoCodeBlock />
            </div>
        </div>
    )
}

export default Cart