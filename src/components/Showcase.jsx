import '../styles/shop.css'
import search from '../assets/icons/search.svg'
import bannerSeasonSale from '../assets/images/banner-season-sale.svg'
import filterIcon from '../assets/icons/filter.png'
import heartIcon from '../assets/icons/heart.svg'
import leftPaginArrow from '../assets/icons/left-pagin-arrow.svg'
import rightPaginArrow from '../assets/icons/right-pagin-arrow.svg'

const Showcase = () => {
    return (
        <div className='container'>
            <div className='shop'>
                <div className='sidebar'>
                    <div className='search-form'>
                        <label>
                            <input type='text' placeholder='Search' className='search input' />
                            <img src={search} alt='Search Icon' className='search-icon' />
                        </label>
                    </div>
                    <div className='sidebar-item'>
                        <div className='sidebar-title'>Categories</div>
                        <div className='sidebar-content'>
                            <ul className='custom-list'>
                                <li className='item'>All</li>
                                <li className='item active'>Men</li>
                                <li className='item'>Women</li>
                                <li className='item'>Accessories</li>
                                <li className='item'>New Arrivals</li>
                            </ul>
                        </div>
                    </div>
                    <div className='sidebar-item'>
                        <div className='sidebar-title'>Price</div>
                        <div className='sidebar-content'>
                            <div className='price-bar'>
                                <input type='text' placeholder='0' className='input' />
                                <input type='text' placeholder='200' className='input' />
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-item'>
                        <div className='sidebar-title'>Colors</div>
                        <div className='sidebar-content'>
                            <div className='colors'>
                                <div className='color'>
                                    <input type='checkbox' name='color' value='black' className='color-checkbox' id='black' />
                                    <label for='black' className='color-name'>Black</label>
                                </div>
                                <div className='color'>
                                    <input type='checkbox' name='color' value='blue' className='color-checkbox' id='blue' />
                                    <label for='blue' className='color-name'>Blue</label>
                                </div>
                                <div className='color'>
                                    <input type='checkbox' name='color' value='red' className='color-checkbox' id='red' />
                                    <label for='red' className='color-name'>Red</label>
                                </div>
                                <div className='color'>
                                    <input type='checkbox' name='color' value='yellow' className='color-checkbox' id='yellow' />
                                    <label for='yellow' className='color-name'>Yellow</label>
                                </div>
                                <div className='color'>
                                    <input type='checkbox' name='color' value='green' className='color-checkbox' id='green' />
                                    <label for='green' className='color-name'>Green</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-item'>
                        <div className='button-wrapper'>
                            <button className='button'>Apply Filter</button>
                            <div className='vertical-line'></div>
                        </div>
                    </div>
                    <div className='sidebar-item rewiewed'>
                        <div className='sidebar-title'>Reviewed by you</div>
                        <div className='sidebar-content'>
                            <div className='reviewed-products'>
                                <div className='product'>
                                    <div className='image'></div>
                                    <div className='info'>
                                        <div className='name'>Retro style handbag</div>
                                        <div className='price'>
                                            <div className='current-price'>$35.99</div>
                                            <div className='old-price'>$52.99</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='product'>
                                    <div className='image'></div>
                                    <div className='info'>
                                        <div className='name'>Warm casual sweater</div>
                                        <div className='price'>
                                            <div className='current-price'>$35.99</div>
                                            <div className='old-price'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='product'>
                                    <div className='image'></div>
                                    <div className='info'>
                                        <div className='name'>Textured turtleneck with zip</div>
                                        <div className='price'>
                                            <div className='current-price'>$35.99</div>
                                            <div className='old-price'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href='#'>
                            <img src={bannerSeasonSale} alt='Banner Season Sale' className='poster' />
                        </a>
                    </div>
                </div>
                <div className='products-wrapper'>
                    <div className='sort-and-count'>
                        <div className='products-count'>
                            There are <span className='bold'>67</span> products in this category
                        </div>
                        <div className='filter'>
                            <img src={filterIcon} alt='Filter' />
                        </div>
                        <div className='sort'>
                            <select className='input'>
                                <option value='RELEVANCE'>By relevance</option>
                                <option value='ASC'>ASC</option>
                                <option value='DESC'>DESC</option>
                            </select>
                        </div>
                    </div>
                    <div className='products'>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <div className='product-photo'>
                                <div className='top-bar'>
                                    <div className='labels'>
                                        <div className='label sale'>
                                            Sale
                                        </div>
                                        <div className='label new'>
                                            New
                                        </div>
                                    </div>
                                    <div className='favorites'>
                                        <img src={heartIcon} alt='Like' />
                                    </div>
                                </div>
                            </div>
                            <div className='info'>
                                <div className='name'>
                                    Textured turtleneck with zip
                                </div>
                                <div className='price'>
                                    <div className='current-price'>$53.99</div>
                                    <div className='old-price'>$54.99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pagination'>
                        <div className='button-left'>
                            <img src={leftPaginArrow} alt='Arrow left' />
                        </div>
                        <div className='pages'>
                            <div className='page active'>1</div>
                            <div className='page'>2</div>
                            <div className='page'>3</div>
                        </div>
                        <div className='button-right'>
                            <img src={rightPaginArrow} alt='Arrow right' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase