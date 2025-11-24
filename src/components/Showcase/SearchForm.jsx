import '../../styles/shop.css'
import search from '../../assets/icons/search.svg'

const SearchForm = () => {
    return (
        <div className='search-form'>
            <label>
                <input type='text' placeholder='Search' className='search input' />
                <img src={search} alt='Search Icon' className='search-icon' />
            </label>
        </div>
    )
}

export default SearchForm