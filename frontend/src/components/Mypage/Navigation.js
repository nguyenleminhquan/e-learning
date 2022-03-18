function Navigation() {
    return (
        <div className="container d-flex align-items-center justify-content-between bg-white rounded p-2">
            <p>Trang của tôi</p>
            <div className="d-flex align-items-center">
                <i className="bi bi-search"></i>
                <input 
                    type="text"
                    placeholder="Tìm kiếm"
                    className="form-control"
                />
            </div>
            <div className="d-flex ">
                <i className="bi bi-chat"></i>
                <i className="bi bi-bell"></i>
                <div className="user-option d-flex">
                    {/* name of user */}
                    <p>Nguyễn Văn A</p>
                    <i className="bi bi-caret-down-fill"></i>
                    {/* <ul> */}
                        {/* list of user options */}
                    {/* </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Navigation