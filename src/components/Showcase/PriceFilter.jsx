import '../../styles/shop.css'

const PriceFilter = (props) => {
    const {
        filters,
        priceFilter,
        setPriceFilter,
    } = props

    const maxPrice = filters.priceRange.max;
    const minPrice = filters.priceRange.min;

    const handleMinValue = (value) => {
        setPriceFilter((prev) => ({ ...prev, min: value }))
    };

    const handleMaxValue = (value) => {
        setPriceFilter((prev) => ({ ...prev, max: value }))
    };

    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Price</div>
            <div className='sidebar-content'>
                <div className='price-bar'>
                    <input type='text'
                        placeholder={minPrice}
                        className='input'
                        value={priceFilter.min}
                        onChange={(e) => handleMinValue(Number(e.target.value))} />
                    <input type='text'
                        placeholder={maxPrice}
                        className='input'
                        value={priceFilter.max}
                        onChange={(e) => handleMaxValue(Number(e.target.value))} />
                </div>
            </div>
        </div>
    )
}

export default PriceFilter