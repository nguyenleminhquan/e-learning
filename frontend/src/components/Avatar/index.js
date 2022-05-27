import className from 'classnames/bind'
import styles from './Avatar.module.scss'

const cx = className.bind(styles)

function Avatar(props) {
    const classes = cx('wrapper', {
        medium: props.medium,
        small: props.small,
    })
    return (
        <div className={classes}>
            <span>{props.text}</span>
        </div>
    )
}

export default Avatar
