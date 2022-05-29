import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button(props) {
    const _props = {
        onClick: props.onClick,
    }

    const classes = cx('wrapper', {
        [props.className]: props.className,
        primary: props.primary,
        outline: props.outline,
        rounded: props.rounded,
        text: props.text,
        fullWidth: props.fullWidth,
    })

    let Comp = 'button'

    if (props.to) {
        _props.to = props.to
        Comp = Link
    } else if (props.href) {
        _props.href = props.href
        Comp = 'a'
    }

    if (props.disabled) {
        Object.keys(props).forEach(propKey => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey]
            }
        })
    }

    return (
        <Comp className={classes} {..._props}>
            {props.leftIcon && <span className={cx('icon')}>{props.leftIcon}</span>}
            <span className={cx('title')}>{props.children}</span>
            {props.rightIcon && <span className={cx('icon')}>{props.rightIcon}</span>}
        </Comp>
    )
}

export default Button
