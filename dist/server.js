"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_1 = __importDefault(require("./controllers/auth"));
const quiz_1 = __importDefault(require("./controllers/quiz"));
const quiz_2 = __importDefault(require("./models/quiz"));
const UserVerified_1 = __importDefault(require("./utils/UserVerified"));
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
app.use(morgan("tiny"));
app.use(cors({}));
app.use(express.json());
app.use((0, cookie_parser_1.default)());
app.use("/auth", auth_1.default);
app.use("/quiz", quiz_1.default);
app.get("/", (request, response) => {
    response.json({ verification: "Server is working" });
});
app.get("/accessquiz/:id", UserVerified_1.default, async (request, response) => {
    try {
        const quiz = await quiz_2.default.findOne({ _id: request.params.id });
        response.json(quiz);
    }
    catch (error) {
        response.status(400).json({ error });
    }
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
//# sourceMappingURL=server.js.map