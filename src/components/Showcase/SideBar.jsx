import '../../styles/shop.css'
import { useState } from 'react'
import Button from '../Button'
import BannerSeasonSale from './BannerSeasonSale'
import CategoriesFilter from './CategoriesFilter'
import ReviewedItems from './ReviewedItems'
import SearchForm from './SearchForm'
import PriceFilter from './PriceFilter'
import ColorsFilter from './ColorsFilter'

const SideBar = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <div className='sidebar'>
            <SearchForm />
            <CategoriesFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <PriceFilter />
            <ColorsFilter />
            <div className='sidebar-item'>
                <Button>Apply Filter</Button>
            </div>
            <ReviewedItems />
            <BannerSeasonSale />
        </div>
    )
}

export default SideBar