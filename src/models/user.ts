import mongoose from "../db/connection";
import { IUser } from "../utils/InterfacesUsed";

const {Schema, model} = mongoose;

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true },
    password: {type: String, required: true}
}, {timestamps: true})

const User = model("User", userSchema)

export default User