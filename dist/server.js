"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_1 = __importDefault(require("./controllers/auth"));
const quiz_1 = __importDefault(require("./controllers/quiz"));
const submission_1 = __importDefault(require("./controllers/submission"));
const public_1 = __importDefault(require("./controllers/public"));
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
app.use(morgan("tiny"));
app.use(cors({
    origin: ["http://localhost:5173", "https://pro-quiz-wizard.netlify.app"],
    credentials: true
}));
app.use(express.json());
app.use((0, cookie_parser_1.default)());
app.use("/auth", auth_1.default);
app.use("/quiz", quiz_1.default);
app.use("/user", submission_1.default);
app.use("/public", public_1.default);
app.get("/", (request, response) => {
    response.json({ verification: "Server is working" });
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
//# sourceMappingURL=server.js.map