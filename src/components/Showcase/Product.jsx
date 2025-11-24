import '../../styles/shop.css'
import { useState } from 'react'
import heartIcon from '../../assets/icons/heart.svg'
import heartIconRed from '../../assets/icons/heart-red.svg'

const Product = (props) => {
    const {
        product,
    } = props

    const [isLiked, setIsLiked] = useState(false);

    const handleLiked = () => {
        setIsLiked(prev => !prev);
    };

    return (
        <div className='product'>
            <div className='product-photo'>
                <img src={product.image} />
                <div className='top-bar'>
                    <div className='labels'>
                        {product.isSale && <div className='label sale'>Sale</div>}
                        {product.isNew && <div className='label new'>New</div>}
                    </div>
                    <div className='favorites' onClick={handleLiked}>
                        <img src={isLiked ? heartIconRed : heartIcon} alt='Like' />
                    </div>
                </div>
            </div>
            <div className='info'>
                <div className='name'>
                    {product.name}
                </div>
                <div className='price'>
                    <div className='current-price'>${product.price}</div>
                    {product.oldPrice && <div className='old-price'>${product.oldPrice}</div>}
                </div>
            </div>
        </div>
    )
}

export default Product