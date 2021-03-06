"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use("/", function (req, res, next) {
    return res.send("Hello World");
});
app.listen(3030, function () {
    console.log("port is 3030");
});
//# sourceMappingURL=app.js.map