import mongoose from "../db/connection";

const {Schema, model} = mongoose;

const quizSchema = new Schema({
    username: String,
    title: String,
    password: String,
    questions: [[String]]
},{timestamps: true})

const Quiz = model("Quiz", quizSchema)

export default Quiz