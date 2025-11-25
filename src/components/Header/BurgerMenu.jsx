import '../../styles/header.css'

const BurgerMenu = () => {
    return (
        <div className='burger-menu'>
            <input type='checkbox' id='burger-checkbox' className='burger-checkbox' />
            <label className='burger' for='burger-checkbox'></label>
        </div>
    )
}

export default BurgerMenu