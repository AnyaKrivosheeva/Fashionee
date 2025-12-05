import '../../styles/shop.css'
import search from '../../assets/icons/search.svg'

const SearchForm = (props) => {
    const {
        searchValue,
        setSearchValue,
    } = props

    return (
        <div className='search-form'>
            <form>
                <input
                    type='text'
                    placeholder='Search'
                    className='search input'
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)} />
                <img src={search} alt='Search Icon' className='search-icon' />
            </form>
        </div>
    )
}

export default SearchForm