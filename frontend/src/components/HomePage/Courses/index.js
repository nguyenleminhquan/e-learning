import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../../css/HomePage/Courses/CourseLists.css'

function CourseLists() {
    const user = useSelector(state => state.user)

    const handleCourseHeaderBtn = () => {
        
    }

    return (
        <div className="courses">
            <div className="courses__header">
                <h1 className="courses__header-title">Courses</h1>
                <Link 
                    className="courses__header-btn btn btn-success"
                    to={user.role === 'teacher' ? 'create-course' : 'participate'}
                >
                    <i className="bi bi-plus-circle"></i>
                    {user.role === 'teacher' ? 'Create course' : 'Participate'}
                </Link>
            </div>
            <ul className="courses__lists">
                <li className="courses__item">
                    <img src="" alt="Image of Subject" className="courses__item-img"/>
                    <div className="courses__item-info">
                        <h3 className="courses__item-name">Giai tich 2</h3>
                        <p className="courses_item-by">by Nguyen Thi Xuan Anh</p>
                    </div>
                    <button className="courses__item-details btn btn-success">View Course</button>
                </li>

                <li className="courses__item">
                    <img src="" alt="Image of Subject" className="courses__item-img"/>
                    <div className="courses__item-info">
                        <h3 className="courses__item-name">Giai tich 2</h3>
                        <p className="courses_item-by">by Nguyen Thi Xuan Anh</p>
                    </div>
                    <button className="courses__item-details btn btn-success">View Course</button>
                </li>

                <li className="courses__item">
                    <img src="" alt="Image of Subject" className="courses__item-img"/>
                    <div className="courses__item-info">
                        <h3 className="courses__item-name">Giai tich 2</h3>
                        <p className="courses_item-by">by Nguyen Thi Xuan Anh</p>
                    </div>
                    <button className="courses__item-details btn btn-success">View Course</button>
                </li>

                <li className="courses__item">
                    <img src="" alt="Image of Subject" className="courses__item-img"/>
                    <div className="courses__item-info">
                        <h3 className="courses__item-name">Giai tich 2</h3>
                        <p className="courses_item-by">by Nguyen Thi Xuan Anh</p>
                    </div>
                    <button className="courses__item-details btn btn-success">View Course</button>
                </li>

                <li className="courses__item">
                    <img src="" alt="Image of Subject" className="courses__item-img"/>
                    <div className="courses__item-info">
                        <h3 className="courses__item-name">Giai tich 2</h3>
                        <p className="courses_item-by">by Nguyen Thi Xuan Anh</p>
                    </div>
                    <button className="courses__item-details btn btn-success">View Course</button>
                </li>
            </ul>
        </div>
    )
}

export default CourseLists