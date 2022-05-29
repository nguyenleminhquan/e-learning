import classNames from "classnames/bind"
import Button from '../../components/Button'
import styles from './CreateCourse.module.scss'

const cx = classNames.bind(styles)

function CreateCourse() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Create new course</h2>
                <Button primary>Save</Button>
            </div>
            <form className={cx('form')}>
                <div className={cx('form-wrap')}>
                    <label htmlFor="course-name">Course name</label>
                    <input 
                        required
                        type="text" 
                        name="course-name"
                        placeholder="Course name"
                    />
                </div>
                <div className={cx('form-wrap')}>
                    <label htmlFor="start-date">Start date</label>
                    <input 
                        type="date" 
                        name="start-date"
                        // placeholder="Course name"
                    />
                </div>
                <div className={cx('form-wrap')}>
                    <label htmlFor="end-date">End date</label>
                    <input 
                        type="date" 
                        name="end-date"
                        // placeholder="Course name"
                    />
                </div>
                <div className={cx('form-wrap')}>
                    <label>Description</label>
                    <textarea></textarea>
                </div>
                <div className={cx('form-wrap')}>
                    <label>Member</label>
                    <input type="file" />
                </div>
            </form>
        </div>
    )
}

export default CreateCourse
