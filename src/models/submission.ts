import mongoose from "../db/connection";

const {Schema, model} = mongoose;

const submissionSchema = new Schema({
    quizID: {type: String, required: true},
    grade: Number,
    name: String,
    questions: [[String]]
},{timestamps: true})

const Submission = model("Submission", submissionSchema)

export default Submission