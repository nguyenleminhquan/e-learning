import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
    name: String,
    lession: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lession',
        default: null
    }],
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }],
    startDay: { type: Date },
    endDate: { type: Date },
    description: String
})

export default mongoose.model('Course', courseSchema)