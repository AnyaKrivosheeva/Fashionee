import '../../styles/cart.css'
import data from '../../assets/products.json'
import ProductItemCart from './ProductItemCart'

const ProductsListCart = () => {
    const CartProducts = data.products.filter(item => item.id === 4 || item.id === 2);

    return (
        <div className='products-list'>
            {CartProducts.map(product => (
                <ProductItemCart key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsListCart