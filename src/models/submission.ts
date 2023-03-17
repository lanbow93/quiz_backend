import mongoose from "../db/connection";

const {Schema, model} = mongoose;

interface ISubmission {
    quizID: string,
    grade?: number,
    name?: string,
    questions: [[string]]
}

const submissionSchema = new Schema<ISubmission>({
    quizID: {type: String, required: true},
    grade: Number,
    name: String,
    questions: [[String]]
},{timestamps: true})

const Submission = model("Submission", submissionSchema)

export default Submission