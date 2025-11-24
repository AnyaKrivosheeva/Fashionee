import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ContentBlock from './components/ContentBlock'
import Showcase from './components/Showcase/Showcase'
import Cart from './components/Cart/Cart'

function App() {
    const [currentPage, setCurrentPage] = useState('Shop');


    return (
        <>
            <Header />
            <ContentBlock currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main>
                {currentPage === 'Shop' && <Showcase />}
                {currentPage === 'Cart' && <Cart />}
            </main>

            <Footer />
        </>
    )
}

export default App
