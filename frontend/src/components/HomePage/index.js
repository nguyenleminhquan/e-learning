import Sidebar from "./Sidebar"
import HeaderStatus from "./HeaderStatus"
import CourseLists from './Courses'
import CreateCourse from "./Courses/CreateCourse"
import HeaderNavigation from "./HeaderNavigation"
import Deadlines from "./Deadlines"
import Timelines from "./Timelines"

import '../../css/HomePage/index.css'
import { Route, Routes } from "react-router-dom"

function HomePage() {
    return (
        <div className="homepage d-flex">
            <Sidebar />
            <div className="homepage__content">
                <HeaderStatus />
                <Routes>
                    <Route path="/" element={<CourseLists />} />
                    <Route path="/create-course" element={<CreateCourse />} />
                    {/* <Route path="/homepage/participate" element={<Participate /> } /> */}
                </Routes>
                {/* <Courses /> */}
            </div>
            <div className="homepage__right-sidebar">
                <HeaderNavigation />
                <div className="homepage__right-sidebar-wrap">
                    <Deadlines />
                    <Timelines />
                </div>
            </div>
        </div>
    )
}

export default HomePage