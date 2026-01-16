import styles from './Shop.module.scss'
import Button from '../Button'

const ApplyButton = (props) => {
    const {
        applyFilters,
    } = props

    return (
        <div className={styles.sidebarItem}>
            <Button onClick={applyFilters}>Apply Filter</Button>
        </div>
    )
}

export default ApplyButton