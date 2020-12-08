"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const Mongoose = require("mongoose");
const UserSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
exports.UserModel = Mongoose.model('User', UserSchema);
//# sourceMappingURL=UserModel.js.map