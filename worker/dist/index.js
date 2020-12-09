"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apollo_1 = require("./apollo");
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());
app.use(apollo_1.apollo);
app.listen(port, () => console.log(`App listening on port ${port}`));
//# sourceMappingURL=index.js.map