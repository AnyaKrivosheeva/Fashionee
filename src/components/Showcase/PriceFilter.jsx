import '../../styles/shop.css'

const PriceFilter = (props) => {
    const {
        filters,
    } = props

    const maxPrice = filters.priceRange.max;
    const minPrice = filters.priceRange.min;

    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Price</div>
            <div className='sidebar-content'>
                <div className='price-bar'>
                    <input type='text' placeholder={minPrice} className='input' />
                    <input type='text' placeholder={maxPrice} className='input' />
                </div>
            </div>
        </div>
    )
}

export default PriceFilter