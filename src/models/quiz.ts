import mongoose from "../db/connection";

const {Schema, model} = mongoose;

interface IQuiz {
    username: string,
    title: string,
    password?: string,
    questions: [[string]]
};

const quizSchema = new Schema<IQuiz>({
    username: String,
    title: String,
    password: String,
    questions: [[String]]
},{timestamps: true});

const Quiz = model("Quiz", quizSchema);

export default Quiz;