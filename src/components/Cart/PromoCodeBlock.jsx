import '../../styles/cart.css'
import buttonArrow from '../../assets/icons/button-arrow.svg'
import FindUsLinks from '../FindUsLinks'
import Button from '../Button'
import useLocalStorage from '../Hooks/useLocalStorage'

const PromoCodeBlock = (props) => {
    const {
        onApplyPromo,
    } = props

    const [promo, setPromo] = useLocalStorage('promo', '');

    const handleButtonClick = () => {
        onApplyPromo(promo.toLowerCase().trim());
    };

    return (
        <div className='promo-code-wrapper'>
            <div className='info'>
                <div className='title'>You Have A Promo Code?</div>
                <div className='description'>To receive up-to-date promotional codes, subscribe to us on social
                    networks.</div>
            </div>
            <div className='promo-code'>
                <input
                    type='text'
                    placeholder='Enter promo code'
                    name='promo-code'
                    className='input'
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                />
                <Button onClick={handleButtonClick}>
                    <img src={buttonArrow} />
                </Button>
            </div>
            <FindUsLinks />
        </div>
    )
}

export default PromoCodeBlock