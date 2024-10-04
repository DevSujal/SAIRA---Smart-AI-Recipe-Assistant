import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(String(process.env.MONGODB_URI))
        const connection = mongoose.connection;

        connection.on("connected" , () => {
            
        })

        connection.on("error", (error) => {
            console.log("Error in connecting to database", error);
            process.exit(); 
        })
    } catch (error) {
        throw new Error("Error in connecting to database : "+ error.message);
    }
}

export default connect;

