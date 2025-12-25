import '../../styles/shop.css'
import filterIcon from '../../assets/icons/filter.png'
import Sort from './Sort'

const SortAndCount = (props) => {
    const {
        products,
        sortType,
        onChangeSort,
    } = props

    return (
        <div className='sort-and-count'>
            <div className='products-count'>
                There are <span className='bold'>{products.length}</span> products in this category
            </div>
            <div className='filter'>
                <img src={filterIcon} alt='Filter' />
            </div>
            <Sort sortType={sortType} onChangeSort={onChangeSort} />
        </div>
    )
}

export default SortAndCount