import Sidebar from "./Sidebar"
import HeaderStatus from "./HeaderStatus"
import Courses from "./Courses"
import HeaderNavigation from "./HeaderNavigation"
import Deadlines from "./Deadlines"
import Timelines from "./Timelines"

import '../../css/HomePage/index.css'

function HomePage() {
    return (
        <div className="homepage d-flex">
            <Sidebar />
            <div className="homepage__content">
                <HeaderStatus />
                <Courses />
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