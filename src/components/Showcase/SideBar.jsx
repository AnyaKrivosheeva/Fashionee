import '../../styles/shop.css'
import { useState } from 'react'
import data from '../../assets/products.json'
import Button from '../Button'
import BannerSeasonSale from './BannerSeasonSale'
import CategoriesFilter from './CategoriesFilter'
import ReviewedItems from './ReviewedItems'
import SearchForm from './SearchForm'
import PriceFilter from './PriceFilter'
import ColorsFilter from './ColorsFilter'

const SideBar = (props) => {
    const {
        searchValue,
        setSearchValue,
    } = props

    const [activeCategory, setActiveCategory] = useState('All');

    const categoriesSet = new Set();
    const colorsSet = new Set();
    let minPrice = Infinity;
    let maxPrice = -Infinity;

    data.products.forEach((product) => {
        product.categories.forEach((category) => categoriesSet.add(category));

        colorsSet.add(product.color);

        if (product.price < minPrice) minPrice = product.price;
        if (product.price > maxPrice) maxPrice = product.price;
    });

    const filters = {
        categories: Array.from(categoriesSet),
        colors: Array.from(colorsSet),
        priceRange: { min: Math.floor(minPrice), max: Math.ceil(maxPrice) },
    };

    return (
        <div className='sidebar'>
            <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
            <CategoriesFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} filters={filters} />
            <PriceFilter filters={filters} />
            <ColorsFilter filters={filters} />
            <div className='sidebar-item'>
                <Button>Apply Filter</Button>
            </div>
            <ReviewedItems />
            <BannerSeasonSale />
        </div>
    )
}

export default SideBar