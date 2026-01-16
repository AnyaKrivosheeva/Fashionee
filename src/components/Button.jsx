import styles from './Button.module.css'

const Button = (props) => {
    const {
        children,
        wrapperClassName = '',
        buttonClassName = '',
        onClick,
    } = props
    return (
        <div className={`${styles.buttonWrapper} ${wrapperClassName}`}>
            <button className={`${styles.button} ${buttonClassName}`} onClick={onClick}>
                {children}
            </button>
            <div className={styles.verticalLine}></div>
        </div>
    )
}

export default Button