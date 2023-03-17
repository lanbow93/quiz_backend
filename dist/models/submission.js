"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const { Schema, model } = connection_1.default;
const submissionSchema = new Schema({
    quizID: { type: String, required: true },
    grade: Number,
    name: String,
    questions: [[String]]
}, { timestamps: true });
const Submission = model("Submission", submissionSchema);
exports.default = Submission;
//# sourceMappingURL=submission.js.map