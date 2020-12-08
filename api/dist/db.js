"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbOptions = exports.url = void 0;
const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB, } = process.env;
exports.url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
exports.dbOptions = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
};
//# sourceMappingURL=db.js.map