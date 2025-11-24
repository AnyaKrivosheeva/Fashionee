import '../../styles/cart.css'
import buttonArrow from '../../assets/icons/button-arrow.svg'
import FindUsLinks from '../FindUsLinks'
import Button from '../Button'

const PromoCodeBlock = () => {
    return (
        <div className='promo-code-wrapper'>
            <div className='info'>
                <div className='title'>You Have A Promo Code?</div>
                <div className='description'>To receive up-to-date promotional codes, subscribe to us on social
                    networks.</div>
            </div>
            <form className='promo-code'>
                <input type='text' placeholder='Enter promo code' name='promo-code' className='input' />
                <Button>
                    <img src={buttonArrow} />
                </Button>
            </form>
            <FindUsLinks />
        </div>
    )
}

export default PromoCodeBlock