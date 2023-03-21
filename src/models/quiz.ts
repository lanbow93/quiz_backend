import mongoose from "../db/connection";
import { IQuiz } from "../utils/InterfacesUsed";

const {Schema, model} = mongoose;



const quizSchema = new Schema<IQuiz>({
    username: String,
    title: String,
    isPublic: Boolean,
    password: String,
    questions: [[String]]
},{timestamps: true});

const Quiz = model("Quiz", quizSchema);

export default Quiz;