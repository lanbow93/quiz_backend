"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_1 = __importDefault(require("./controllers/auth"));
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
app.get("/", (request, response) => {
    response.json({ verification: "Server is working" });
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
//# sourceMappingURL=server.js.map