import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons' 
import Button from "../../components/Button"
import styles from './Home.module.scss'
import CourseItem from "../../components/CourseItem"

const cx = classNames.bind(styles)

const courses = [
    {
        name: 'Calculus 2',
        author: 'Nguyen Thi Xuan Anh',
    },
    {
        name: 'MHH',
        author: 'Nguyen An Khuong',
    },
    {
        name: 'OS',
        author: 'Nguyen Quang Hung'
    },
    {
        name: 'Mac-Lenin',
        author: 'Nguyen Thi Minh Huong'
    }
]
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Courses</h2>
                <Button primary leftIcon={<FontAwesomeIcon icon={faCirclePlus}/>}>Participate</Button>
            </div>
            <div className={cx('course-list')}>
                {courses.map((course, index) => (
                    <CourseItem 
                        key={index}
                        courseName={course.name} 
                        courseAuthor={course.author}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home