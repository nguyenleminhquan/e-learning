function Avatar(props) {
    const style = {
        width: props.width + 'px',
        height: props.height + 'px', 
        backgroundColor: props.backgroundColor,
        fontSize: props.fontSize + 'rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        color: '#fff',
    }
    return (
        <div style={style}>
            <span>{props.name}</span>
        </div>
    )
}

export default Avatar
