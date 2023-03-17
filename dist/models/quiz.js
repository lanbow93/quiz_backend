"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const { Schema, model } = connection_1.default;
const quizSchema = new Schema({
    username: String,
    title: String,
    password: String,
    questions: [[String]]
}, { timestamps: true });
const Quiz = model("Quiz", quizSchema);
exports.default = Quiz;
//# sourceMappingURL=quiz.js.map