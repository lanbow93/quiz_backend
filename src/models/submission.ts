import mongoose from "../db/connection";
import { ISubmission } from "../utils/InterfacesUsed";

const {Schema, model} = mongoose;

const submissionSchema = new Schema<ISubmission>({
    quizID: {type: String, required: true},
    grade: Number,
    name: String,
    questions: [[String]]
},{timestamps: true})

const Submission = model("Submission", submissionSchema)

export default Submission