import '../../styles/shop.css'
import data from '../../assets/products.json'
import ReviewedItem from './ReviewedItem';

const ReviewedItems = () => {
    const reviewedProducts = data.products.filter(item => item.id === 6 || item.id === 5 || item.id === 1);

    return (
        <div className='sidebar-item reviewed'>
            <div className='sidebar-title'>Reviewed by you</div>
            <div className='sidebar-content'>
                <div className='reviewed-products'>
                    {reviewedProducts.map(product => (
                        <ReviewedItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReviewedItems