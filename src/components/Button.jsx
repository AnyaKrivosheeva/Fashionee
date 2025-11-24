const Button = (props) => {
    const {
        children,
    } = props
    return (
        <div className='button-wrapper'>
            <button className='button'>
               {children}
            </button>
            <div className='vertical-line'></div>
        </div>
    )
}

export default Button