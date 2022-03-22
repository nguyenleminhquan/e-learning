import { Link } from "react-router-dom"

function LeftSideBar() {
    return (
        <section className="left-sidebar w-25 bg-white ms-2 me-2 p-4 rounded-3">
            <div className="sidebar__logo"><span>E</span></div>
            <ul className="sidebar__features">
                <li><Link to="/mypage">Trang của tôi</Link></li>
                <li><Link to="/chat">Chat</Link></li>
            </ul>
        </section>
    )
}

export default LeftSideBar