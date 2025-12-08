import '../../styles/shop.css'
import Checkbox from './Checkbox';

const ColorsFilter = (props) => {
    const {
        filters,
        selectedColors,
        setSelectedColors,
    } = props

    const colors = [...filters.colors];

    const toggleColor = (color) => {
        const colorLower = color.toLowerCase();
        setSelectedColors(prev =>
            prev.includes(colorLower)
                ? prev.filter(c => c !== colorLower)
                : [...prev, colorLower]
        )
    };

    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Colors</div>
            <div className='sidebar-content'>
                <div className='colors'>
                    {colors.map((color) => (
                        <Checkbox key={color.toLowerCase()}
                            divClassName='color'
                            inputClassName='color-checkbox'
                            name='color'
                            value={color.toLocaleLowerCase()}
                            id={color.toLocaleLowerCase()}
                            labelClassName='color-name'
                            htmlFor={color.toLocaleLowerCase()}
                            color={color}
                            checked={selectedColors.includes(color.toLowerCase())}
                            onChange={() => toggleColor(color)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColorsFilter