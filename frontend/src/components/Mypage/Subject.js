function Subject() {
    return (
        <div className="subject w-50 mt-2 p-4 bg-white rounded w-75">
            <div className="d-flex justify-content-between align-items-center mb-4 p-3">
                {/* Name of the term  */}
                <h3>Học kì II 2021-2022</h3>
                <button className="btn btn-success text-white d-flex">
                    <i className="bi bi-plus-circle"></i>
                    <p>Thêm</p>
                </button>
            </div>
            <ul className="subject-lists">
                {/* List of subject of student */}
                <li className="container-fluid p-4 d-flex align-items-center bg-secondary rounded m-2">
                    <p className="subject__name text-white">Ngữ văn 10C1</p>
                </li>

                <li className="container-fluid p-4 d-flex align-items-center bg-secondary rounded m-2">
                    <p className="subject__name text-white">Ngữ văn 10A5</p>
                </li>

                <li className="container-fluid p-4 d-flex align-items-center bg-secondary rounded m-2">
                    <p className="subject__name text-white">Giao tiếp hiệu quả (Số 22)</p>
                </li>
            </ul>

        </div>
    )
}

export default Subject