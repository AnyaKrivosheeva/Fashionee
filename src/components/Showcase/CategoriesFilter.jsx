import '../../styles/shop.css'

const CategoriesFilter = (props) => {
    const {
        activeCategory,
        setActiveCategory,
        filters,
    } = props

    const categories = ['All', ...filters.categories];

    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Categories</div>
            <div className='sidebar-content'>
                <ul className='custom-list'>
                    {categories.map((category, index) => (
                        <li key={index} className={`item ${activeCategory === category ? 'active' : ''}`} onClick={() => setActiveCategory(category)}>{category}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CategoriesFilter