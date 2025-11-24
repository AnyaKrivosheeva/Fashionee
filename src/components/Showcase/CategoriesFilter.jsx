import '../../styles/shop.css'

const CategoriesFilter = (props) => {
    const {
        activeCategory,
        setActiveCategory,
    } = props

    const categories = ['All', 'Men', 'Women', 'Accessories', 'New Arrivals']

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