import '../../styles/shop.css'

const Sort = (props) => {
    const {

    } = props

    return (
        <div className='sort'>
            <select className='input'>
                <option value='RELEVANCE'>By relevance</option>
                <option value='ASC'>from A to Z</option>
                <option value='DESC'>from Z to A</option>
                <option value='DESC'>from low to high</option>
                <option value='DESC'>from high to low</option>
            </select>
        </div>
    )
}

export default Sort