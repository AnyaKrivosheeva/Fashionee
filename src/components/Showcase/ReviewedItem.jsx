import '../../styles/cart.css'

const ReviewedItem = (props) => {
    const {
        product,
    } = props

    return (
        <div className='product'>
            <div className='image'>
                <img src={product.image} />
            </div>
            <div className='info'>
                <div className='name'>{product.name}</div>
                <div className='price'>
                    <div className='current-price'>${product.price}</div>
                    {product.oldPrice && <div className='old-price'>${product.oldPrice}</div>}
                </div>
            </div>
        </div>
    )
}

export default ReviewedItem