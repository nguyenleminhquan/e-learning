import mongoose from 'mongoose'

const lessionSchema = mongoose.Schema({
    title: String,
    link: [{ type: String }]
})

export default mongoose.model('Lession', lessionSchema)