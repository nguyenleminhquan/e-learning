import LeftSideBar from './LeftSideBar'
import Navigation from './Navigation'
import Subject from './Subject'
import RightSideBar from './RightSideBar'

function Mypage() {
    return (
        <div className="mypage d-flex p-4">
            <LeftSideBar />
            <section className="content w-75">
                <Navigation />
                <div className="main-content d-flex">
                    <Subject />
                    <RightSideBar />
                </div>
            </section>
        </div>
    )
}

export default Mypage