"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
app.use(morgan("tiny"));
app.use(cors({}));
app.use(express.json());
app.get("/", (request, response) => {
    response.json({ verification: "Server is working" });
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
//# sourceMappingURL=server.js.map