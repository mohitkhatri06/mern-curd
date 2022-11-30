import mongoose from "mongoose"

const Connection = async (url) => {

    try {
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("database connected successfully...")

    }catch(error)
    {
        console.log("Error while connecting with databse", error)
    }
}

export default Connection;