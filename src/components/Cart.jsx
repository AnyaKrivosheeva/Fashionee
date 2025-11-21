import '../styles/cart.css'
import buttonArrow from '../assets/icons/button-arrow.svg'

const Cart = () => {
    return (
        <div className='container'>
            <div className='cart'>
                <div className='order-wrapper'>
                    <div className='products-list'>
                        <div className='product'>
                            <div className='photo'></div>
                            <div className='product-info'>
                                <div className='title'>Fashionee - Catton Shirt (S)</div>
                                <div className='price-wrapper'>
                                    <div className='price-and-quantity'>
                                        <div className='price'>
                                            <div className='old-price'>$52.99</div>
                                            <div className='current-price'>$35.99</div>
                                        </div>
                                        <div className='quantity'>
                                            <div className='count-button'>-</div>
                                            <div className='count'>1</div>
                                            <div className='count-button'>+</div>
                                        </div>
                                    </div>
                                    <div className='total-price'>$35.99</div>
                                </div>
                                <div className='close'>X</div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='photo'></div>
                            <div className='product-info'>
                                <div className='title'>Spray Wrap Skirt</div>
                                <div className='price-wrapper'>
                                    <div className='price-and-quantity'>
                                        <div className='price'>
                                            <div className='old-price'>$120.99</div>
                                            <div className='current-price'>$110.99</div>
                                        </div>
                                        <div className='quantity'>
                                            <div className='count-button'>-</div>
                                            <div className='count'>1</div>
                                            <div className='count-button'>+</div>
                                        </div>
                                    </div>
                                    <div className='total-price'>$110.99</div>
                                </div>
                                <div className='close'>X</div>
                            </div>
                        </div>
                    </div>
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
                        <div className='button-wrapper'>
                            <button className='button'>Checkout</button>
                            <div className='vertical-line'></div>
                        </div>
                    </div>
                </div>
                <div className='promo-code-wrapper'>
                    <div className='info'>
                        <div className='title'>You Have A Promo Code?</div>
                        <div className='description'>To receive up-to-date promotional codes, subscribe to us on social
                            networks.</div>
                    </div>
                    <div className='promo-code'>
                        <input type='text' placeholder='Enter promo code' name='promo-code' className='input' />
                        <div className='button-wrapper'>
                            <button className='button'>
                                <img src={buttonArrow} alt='Arrow icon' />
                            </button>
                            <div className='vertical-line'></div>
                        </div>
                    </div>
                    <div className='find-us'>
                        <div className='find-us-text'>
                            Find us here:
                        </div>
                        <div className='find-us-links'>
                            <div className='find-us-link'>
                                <a href=''>FB</a>
                            </div>
                            <div className='line'></div>
                            <div className='find-us-link'>
                                <a href=''>TW</a>
                            </div>
                            <div className='line'></div>
                            <div className='find-us-link'>
                                <a href=''>INS</a>
                            </div>
                            <div className='line'></div>
                            <div className='find-us-link'>
                                <a href=''>PT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart