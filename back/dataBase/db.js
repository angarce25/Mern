import mongoose from "mongoose";

//export nombrada

export const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        //esto lo sacamos de los 3 puntos de mongo compas y añadimos el /todolist
        console.log("Connected");
    } catch (error) {
        console.log(error)
        
    }
}