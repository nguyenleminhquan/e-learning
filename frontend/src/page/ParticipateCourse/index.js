import classNames from "classnames/bind"
import styles from './ParticipateCourse.module.scss'

const cx = classNames.bind(styles)

function ParticipateCourse() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Participate</h2>
            </div>
            
        </div>
    )
}

export default ParticipateCourse
