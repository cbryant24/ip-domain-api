"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apollo_1 = require("./apollo");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.static('./client/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(apollo_1.apollo);
app.get('/ip-services', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield apollo_1.apollo(req, res);
}));
app.listen(port, () => console.log(`App listening on port ${port}`));
//# sourceMappingURL=index.js.map