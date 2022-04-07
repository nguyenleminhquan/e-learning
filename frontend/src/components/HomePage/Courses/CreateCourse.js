import React from 'react'
import { Link } from 'react-router-dom'

import '../../../css/HomePage/Courses/CreateCourse.css'

function CreateCourse() {
  return (
    <div className='create-course'>
        <div className="create-course__header">
            <h1 className="create-course__header-title">Create a new course</h1>
            <Link to="/" className='btn btn-success'>Save</Link>
        </div>
            
        <form>
            <div className="pb-3 d-flex">
                <label htmlFor="course-name">Tên khóa học</label>
                <input 
                    type="text" 
                    className='form-control'
                    id='course-name'
                    placeholder='Name Course'
                />
            </div>
            <div className="pb-3 d-flex">
                <label htmlFor="start-date">Ngày bắt đầu</label>
                <input 
                    type="date" 
                    className='form-control'
                    id='start-date'
                    placeholder='Start date'
                />
            </div>
            <div className="pb-3 d-flex">
                <label htmlFor="end-date">Ngày kết thúc</label>
                <input 
                    type="date" 
                    className='form-control'
                    id='end-date'
                    placeholder='End date'
                />
            </div>
            <div className="pb-3 d-flex">
                <label htmlFor="description">Mô tả</label>
                <input 
                    type="text" 
                    className='form-control'
                    id='description'
                    placeholder='Course description'
                />
            </div>
            <div className="pb-3 d-flex">
                {/* <label htmlFor="description">Thành viên</label> */}
                <input 
                    type="file" 
                    className='form-control'
                    id='member' 
                    placeholder='Add member'
                />
            </div>
        </form>

    </div>
  )
}

export default CreateCourse