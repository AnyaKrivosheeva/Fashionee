import '../../styles/shop.css'
import SideBar from './SideBar'
import ProductsArea from './ProductsArea'

const Showcase = (props) => {
    const {
        onToggleFavorite,
        favorites,
        addToCart,
        increaseQty,
        decreaseQty,
        cart,
    } = props
    return (
        <div className='container'>
            <div className='shop'>
                <SideBar />
                <ProductsArea
                    onToggleFavorite={onToggleFavorite}
                    favorites={favorites}
                    addToCart={addToCart}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                    cart={cart} />
            </div>
        </div>
    )
}

export default Showcase