const Button = (props) => {
    const {
        children,
        onClick,
    } = props
    return (
        <div className='button-wrapper'>
            <button className='button' onClick={onClick}>
                {children}
            </button>
            <div className='vertical-line'></div>
        </div>
    )
}

export default Button