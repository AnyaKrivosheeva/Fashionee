import '../../styles/cart.css'
import Button from '../Button'

const Order = (props) => {
    const {
        CartProducts,
        promoDiscount,
        onCheckout,
    } = props

    const priceSum = CartProducts.reduce((total, product) => total + product.price * product.quantity, 0);

    const discountAmount = priceSum * promoDiscount;

    const delivery = priceSum > 0 ? 15 : 0;

    const total = priceSum - discountAmount + delivery;

    return (
        <div className='order'>
            <div className='title'>Your Order</div>
            <div className='price-row'>
                <div className='name'>Оrder price</div>
                <div className='price'>${priceSum.toFixed(2)}</div>
            </div>
            <div className='price-row'>
                <div className='name'>Discount for promo code</div>
                <div>
                    {promoDiscount > 0 ? '10%' : 'No'}
                </div>
            </div>
            <div className='price-row delimiter'>
                <div className='name'>Delivery <span className='delivery-date'>(Aug 02 at 16:00)</span></div>
                <div className='price'>${delivery.toFixed(2)}</div>
            </div>
            <div className='price-row total'>
                <div className='total-name'>Total</div>
                <div className='total-price'>${total.toFixed(2)}</div>
            </div>
            <Button onClick={() => {
                onCheckout({
                    delivery,
                    discountAmount,
                    priceSum,
                    total,
                })
            }}>
                Checkout
            </Button>
        </div>
    )
}

export default Order