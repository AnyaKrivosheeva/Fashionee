import '../../styles/cart.css'
import Button from '../Button'

const Order = () => {
    return (
        <div className='order'>
            <div className='title'>Your Order</div>
            <div className='price-row'>
                <div className='name'>Оrder price</div>
                <div className='price'>$146.98</div>
            </div>
            <div className='price-row'>
                <div className='name'>Discount for promo code</div>
                <div>No</div>
            </div>
            <div className='price-row delimiter'>
                <div className='name'>Delivery <span className='delivery-date'>(Aug 02 at 16:00)</span></div>
                <div className='price'>$16</div>
            </div>
            <div className='price-row total'>
                <div className='total-name'>Total</div>
                <div className='total-price'>$162.98 </div>
            </div>
            <Button>Checkout</Button>
        </div>
    )
}

export default Order