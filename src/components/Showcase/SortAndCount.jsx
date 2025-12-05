import '../../styles/shop.css'
import filterIcon from '../../assets/icons/filter.png'

const SortAndCount = (props) => {
    const {
        filteredProducts,
    } = props

    return (
        <div className='sort-and-count'>
            <div className='products-count'>
                There are <span className='bold'>{filteredProducts.length}</span> products in this category
            </div>
            <div className='filter'>
                <img src={filterIcon} alt='Filter' />
            </div>
            <div className='sort'>
                <select className='input'>
                    <option value='RELEVANCE'>By relevance</option>
                    <option value='ASC'>ASC</option>
                    <option value='DESC'>DESC</option>
                </select>
            </div>
        </div>
    )
}

export default SortAndCount