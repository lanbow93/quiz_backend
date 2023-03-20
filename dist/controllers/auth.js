"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
router.post("/signup", async (request, response) => {
    try {
        request.body.password = await bcryptjs_1.default.hash(request.body.password, await bcryptjs_1.default.genSalt(10));
        const user = await user_1.default.create(request.body);
        response.json({ status: "User Created", username: user });
    }
    catch (error) {
        response.status(400).json(error);
    }
});
router.post("/login", async (request, response) => {
    try {
        const { username, password } = request.body;
        const user = await user_1.default.findOne({ username });
        if (user) {
            const passwordCheck = await bcryptjs_1.default.compare(password, user.password);
            if (passwordCheck) {
                const payload = { username };
                const token = await jsonwebtoken_1.default.sign(payload, process.env.SECRET);
                response.cookie("token", token, { httpOnly: true }).json({ payload, status: "logged in" });
            }
            else {
                response.status(400).json({ error: "Password does not match" });
            }
        }
        else {
            response.status(400).json({ error: "User does not exist" });
        }
    }
    catch (error) {
        response.status(400).json(error);
    }
});
router.post("/logout", async (request, response) => {
    response.clearCookie("token").json({ response: "You are Logged Out" });
});
exports.default = router;
//# sourceMappingURL=auth.js.map