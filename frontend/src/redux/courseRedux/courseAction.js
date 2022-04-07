import axios from "axios"

const createCourse = payload => {
    return dispatch => {
        axios.post('http://localhost:5000')
    }
}

const renderCourse = payload => {
    return dispatch => {
        axios.get('')
            .then(response => {
                const courses = response.data
                
            })
        
    }
    function renderSuccessfull(courses) { return { type: RENDER_SUCCESSFULL, payload } }
}

