import { useEffect, useState } from 'react'
import '../../styles/shop.css'
import SideBar from './SideBar'
import ProductsArea from './ProductsArea'

const Showcase = (props) => {
    const {
        onToggleFavorite,
        favorites,
        addToCart,
        increaseQty,
        decreaseQty,
        cart,
    } = props

    const [searchValue, setSearchValue] = useState('');
    const [debouncedSearchValue, setDebouncedSearchValue] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchValue(searchValue);
        }, 350);

        return () => {
            clearTimeout(timer);
        }
    }, [searchValue]);

    return (
        <div className='container'>
            <div className='shop'>
                <SideBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue} />
                <ProductsArea
                    searchValue={debouncedSearchValue}
                    onToggleFavorite={onToggleFavorite}
                    favorites={favorites}
                    addToCart={addToCart}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                    cart={cart} />
            </div>
        </div>
    )
}

export default Showcase