import { config } from 'dotenv'
import mongoose from 'mongoose'



config();

const connectToDB = () => mongoose.connect("mongodb+srv://<bsaladkari>:<9KaER24DKqHQVKv0>@cluster0.mongodb.net/<groupChat>?retryWrites=true&w=majority").then(async () => {
    return Promise.resolve("Connected to MongoDB.")
})
    .catch(function (err) {
        return Promise.reject(err)
    })

export default connectToDB