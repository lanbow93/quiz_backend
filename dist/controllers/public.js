"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quiz_1 = __importDefault(require("../models/quiz"));
const UserVerified_1 = __importDefault(require("../utils/UserVerified"));
const router = express_1.default.Router();
router.get("/", async (request, response) => {
    try {
        const quizzes = await quiz_1.default.find({ isPublic: true }).sort({ "title": 1 });
        response.json(quizzes);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
router.get("/access/:id", UserVerified_1.default, async (request, response) => {
    try {
        const quiz = await quiz_1.default.findOne({ _id: request.params.id });
        response.json(quiz);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
exports.default = router;
//# sourceMappingURL=public.js.map