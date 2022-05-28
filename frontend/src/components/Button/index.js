import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button(props) {
    const _props = {
        onClick: props.onClick,
    }
    const classes = cx('wrapper', {
        primary: props.primary,
        outline: props.outline,
        rounded: props.rounded,
        fullWidth: props.fullWidth,
    })

    let Comp = 'button'

    return (
        <Comp className={classes} {..._props}>
            {props.leftIcon && <span className={cx('icon')}>{props.leftIcon}</span>}
            <span className={cx('title')}>{props.children}</span>
            {props.rightIcon && <span className={cx('icon')}>{props.rightIcon}</span>}
        </Comp>
    )
}

export default Button
