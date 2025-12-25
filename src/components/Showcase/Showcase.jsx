import { useEffect, useState } from 'react'
import '../../styles/shop.css'
import data from '../../assets/products.json'
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

    const products = data.products;

    const [searchValue, setSearchValue] = useState(() => {
        const saved = localStorage.getItem('searchValue');
        return saved ? JSON.parse(saved) : '';
    });
    const [debouncedSearchValue, setDebouncedSearchValue] = useState('');

    const [activeCategory, setActiveCategory] = useState(() => {
        const saved = localStorage.getItem('activeCategory');
        return saved ? JSON.parse(saved) : 'All';
    });
    const [priceFilter, setPriceFilter] = useState(() => {
        const saved = localStorage.getItem('priceFilter');
        return saved ? JSON.parse(saved) : { min: '', max: '' };
    });
    const [selectedColors, setSelectedColors] = useState(() => {
        const saved = localStorage.getItem('selectedColors');
        return saved ? JSON.parse(saved) : [];
    });

    const [filteredProducts, setFilteredProducts] = useState(() => {
        const saved = localStorage.getItem('filteredProducts');
        return saved ? JSON.parse(saved) : products;
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchValue(searchValue);
        }, 350);

        return () => {
            clearTimeout(timer);
        }
    }, [searchValue]);

    useEffect(() => {
        localStorage.setItem('searchValue', JSON.stringify(searchValue));
    }, [searchValue]);

    useEffect(() => {
        localStorage.setItem('activeCategory', JSON.stringify(activeCategory));
    }, [activeCategory]);

    useEffect(() => {
        localStorage.setItem('priceFilter', JSON.stringify(priceFilter));
    }, [priceFilter]);

    useEffect(() => {
        localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
    }, [selectedColors]);

    useEffect(() => {
        localStorage.setItem('filteredProducts', JSON.stringify(filteredProducts));
    }, [filteredProducts]);

    const applyFilters = () => {
        let filtered = [...products];

        if (activeCategory !== 'All') {
            filtered = filtered.filter(p => p.categories.includes(activeCategory));
        }

        if (priceFilter.min !== '') {
            filtered = filtered.filter(p => p.price >= Number(priceFilter.min));
        }

        if (priceFilter.max !== '') {
            filtered = filtered.filter(p => p.price <= Number(priceFilter.max));
        }

        if (selectedColors.length > 0) {
            filtered = filtered.filter(p => selectedColors.includes(p.color.toLowerCase()));
        }

        setFilteredProducts(filtered);
    };

    const displayedProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
    );

    return (
        <div className='container'>
            <div className='shop'>
                <SideBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    priceFilter={priceFilter}
                    setPriceFilter={setPriceFilter}
                    selectedColors={selectedColors}
                    setSelectedColors={setSelectedColors}
                    applyFilters={applyFilters} />
                <ProductsArea
                    products={displayedProducts}
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