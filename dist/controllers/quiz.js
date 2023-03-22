"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isLoggedIn_1 = __importDefault(require("../utils/isLoggedIn"));
const quiz_1 = __importDefault(require("../models/quiz"));
const router = express_1.default.Router();
router.use(isLoggedIn_1.default);
router.get("/", async (request, response) => {
    try {
        const username = request.payload.username;
        const quizzes = await quiz_1.default.find({ username });
        response.json(quizzes);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
router.delete("/:id", async (request, response) => {
    try {
        const username = request.payload.username;
        request.body.username = username;
        const quiz = await quiz_1.default.deleteOne({ _id: request.params.id, username });
        response.json(quiz);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
router.put("/:id", async (request, response) => {
    try {
        const username = request.payload.username;
        request.body.username = username;
        const quiz = await quiz_1.default.findByIdAndUpdate(request.params.id, request.body, { new: true });
        response.json(quiz);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
router.post("/", async (request, response) => {
    try {
        const username = request.payload.username;
        request.body.username = username;
        const quiz = await quiz_1.default.create(request.body);
        response.json(quiz);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
router.get("/:id", async (request, response) => {
    try {
        const username = request.payload.username;
        const quiz = await quiz_1.default.findOne({ username, _id: request.params.id });
        response.json(quiz);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
exports.default = router;
//# sourceMappingURL=quiz.js.map