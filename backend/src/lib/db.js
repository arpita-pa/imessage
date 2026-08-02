import mongoose, { mongo } from "mongoose";

export async function connectDB(params) {
    try{
        const mongoUri = process.env.MONGO_URI;

        if(!mongoUri){
            throw new Error("MONGO_URI is required");
        }
        console.log(process.env.MONGO_URI);
        const conn = await mongoose.connect(mongoUri);

        console.log("MongoDB connected", conn.connection.host);
    }catch(error){
        console.error("MongoDB connection error: ", error.message);
        process.exit(1); //1 means failed and 0 means success
    }
}