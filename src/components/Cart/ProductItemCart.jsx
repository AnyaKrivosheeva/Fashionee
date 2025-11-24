import '../../styles/cart.css'

const ProductItemCart = (props) => {
    const {
        product,
    } = props

    return (
        <div className='product'>
            <div className='photo'>
                <img src={product.image} />
            </div>
            <div className='product-info'>
                <div className='title'>{product.name}</div>
                <div className='price-wrapper'>
                    <div className='price-and-quantity'>
                        <div className='price'>
                            {product.oldPrice && (
                                <div className="old-price">${product.oldPrice}</div>
                            )}
                            <div className='current-price'>${product.price}</div>
                        </div>
                        <div className='quantity'>
                            <div className='count-button'>-</div>
                            <div className='count'>1</div>
                            <div className='count-button'>+</div>
                        </div>
                    </div>
                    <div className='total-price'>${product.price}</div>
                </div>
                <div className='close'>X</div>
            </div>
        </div>
    )
}

export default ProductItemCart