import '../../styles/cart.css'

const ProductItemCart = (props) => {
    const {
        product,
        increaseQty,
        decreaseQty,
        removeFromCart,
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
                            <div className='count-button' onClick={() => decreaseQty(product.id)}>-</div>
                            <div className='count'>{product.quantity}</div>
                            <div className='count-button' onClick={() => increaseQty(product.id)}>+</div>
                        </div>
                    </div>
                    <div className='total-price'>${product.price * product.quantity}</div>
                </div>
                <div className='close' onClick={() => removeFromCart(product.id)}>X</div>
            </div>
        </div>
    )
}

export default ProductItemCart