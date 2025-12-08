import '../../styles/shop.css'
import Button from '../Button'

const ApplyButton = (props) => {
    const {
        applyFilters,
    } = props

    return (
        <div className='sidebar-item'>
            <Button onClick={applyFilters}>Apply Filter</Button>
        </div>
    )
}

export default ApplyButton