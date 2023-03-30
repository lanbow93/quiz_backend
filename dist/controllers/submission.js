"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AdminLoggedIn_1 = __importDefault(require("../utils/AdminLoggedIn"));
const submission_1 = __importDefault(require("../models/submission"));
const router = express_1.default.Router();
router.get("/index/:id", AdminLoggedIn_1.default, async (request, response) => {
    try {
        const submissions = await submission_1.default.find({ quizID: request.params.id }).sort({ "name": 1 });
        response.json(submissions);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
router.delete("/:id", AdminLoggedIn_1.default, async (request, response) => {
    try {
        const submission = await submission_1.default.deleteOne({ _id: request.params.id });
        response.json(submission);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
router.post("/", async (request, response) => {
    try {
        const submission = await submission_1.default.create(request.body);
        response.json(submission);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
router.get("/view/:id", AdminLoggedIn_1.default, async (request, response) => {
    try {
        const submission = await submission_1.default.findOne({ _id: request.params.id });
        response.json(submission);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
exports.default = router;
//# sourceMappingURL=submission.js.map