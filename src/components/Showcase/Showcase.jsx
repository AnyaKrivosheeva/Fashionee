import '../../styles/shop.css'
import SideBar from './SideBar'
import ProductsArea from './ProductsArea'

const Showcase = (props) => {
    const {
        onToggleFavorite,
        favorites,
    } = props
    return (
        <div className='container'>
            <div className='shop'>
                <SideBar />
                <ProductsArea onToggleFavorite={onToggleFavorite} favorites={favorites} />
            </div>
        </div>
    )
}

export default Showcase