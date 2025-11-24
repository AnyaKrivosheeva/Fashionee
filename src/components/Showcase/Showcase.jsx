import '../../styles/shop.css'
import SideBar from './SideBar'
import ProductsArea from './ProductsArea'

const Showcase = () => {
    return (
        <div className='container'>
            <div className='shop'>
                <SideBar />
                <ProductsArea />
            </div>
        </div>
    )
}

export default Showcase