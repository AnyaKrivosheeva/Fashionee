import '../../styles/shop.css'
import Checkbox from './Checkbox';

const ColorsFilter = (props) => {
    const {
        filters,
    } = props

    const colors = [...filters.colors];

    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Colors</div>
            <div className='sidebar-content'>
                <div className='colors'>
                    {colors.map((color, index) => (
                        <Checkbox key={index} divClassName='color' inputClassName='color-checkbox' name='color' value={color.toLocaleLowerCase()}
                            id={color.toLocaleLowerCase()} labelClassName='color-name' htmlFor={color.toLocaleLowerCase()} color={color} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColorsFilter