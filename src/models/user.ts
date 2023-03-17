import mongoose from "../db/connection";

const {Schema, model} = mongoose;

interface IUser {
    username: string,
    password: string
}

const userSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true },
    password: {type: String, required: true}
}, {timestamps: true})

const User = model("User", userSchema)

export default User