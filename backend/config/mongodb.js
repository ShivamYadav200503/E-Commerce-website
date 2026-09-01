import mongoose from 'mongoose'

const connectDB = async() => {
    mongoose.connection.on('connected', ()=>{
        console.log('Connected to MongoDB')
    })
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message)
    }
}

export default connectDB;