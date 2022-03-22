import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    role: String,
    dob: String,
    gender: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', default: null }]

})

userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

export default mongoose.model('User', userSchema)

