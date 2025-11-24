import '../../styles/shop.css'

const PriceFilter = () => {
    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Price</div>
            <div className='sidebar-content'>
                <div className='price-bar'>
                    <input type='text' placeholder='0' className='input' />
                    <input type='text' placeholder='200' className='input' />
                </div>
            </div>
        </div>
    )
}

export default PriceFilter