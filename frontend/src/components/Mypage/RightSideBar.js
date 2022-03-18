import Deadline from './Deadline'
import Calendar from './Calendar'

function RightSideBar() {
    return (
        <div className="right-sidebar w-50 d-flex flex-column">
            <Deadline />
            <Calendar />
        </div>
    )
}

export default RightSideBar