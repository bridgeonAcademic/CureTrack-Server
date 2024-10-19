"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const events_1 = require("events");
dotenv_1.default.config();
const app = (0, express_1.default)();
events_1.EventEmitter.setMaxListeners(20);
app.use((0, cors_1.default)({
    origin: ["http://localhost:5003"],
    credentials: true,
}));
app.use(express_1.default.json({ limit: "100mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "100mb" }));
app.get("/api", (req, res) => {
    res.send("Hello World!..");
});
exports.default = app;
