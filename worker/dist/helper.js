"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("validator");
const isIp = require('is-ip');
const isValidDomain = require('is-valid-domain');
exports.validBodyData = (body) => {
    body.data.services.forEach((service) => {
        if (!validator_1.default.isAlpha(service))
            return false;
    });
    if (!isIp(body.data.ip) && !isValidDomain(body.data.ip))
        return false;
    return true;
};
//# sourceMappingURL=helper.js.map