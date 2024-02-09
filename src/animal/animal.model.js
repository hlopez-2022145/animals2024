import mongoose from "mongoose"

const animalSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    years: { 
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

export default mongoose.model('animal', animalSchema)