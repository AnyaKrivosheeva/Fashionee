import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ContentBlock from './components/ContentBlock'
import Showcase from './components/Showcase/Showcase'
import Cart from './components/Cart/Cart'

function App() {
    const [currentPage, setCurrentPage] = useState('Shop');
    
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(fav => fav !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    return (
        <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} favoritesCount={favorites.length} />
            <ContentBlock currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main>
                {currentPage === 'Shop' && <Showcase onToggleFavorite={toggleFavorite} favorites={favorites} />}
                {currentPage === 'Cart' && <Cart />}
            </main>

            <Footer />
        </>
    )
}

export default App
