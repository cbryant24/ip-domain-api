"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIpFromDomain = exports.validIp = void 0;
const IpAddress = require("ip-address");
const dns = require('dns');
const validIp = (ip) => {
    const ip4Address = IpAddress.Address4.isValid(ip);
    const ip6Address = IpAddress.Address6.isValid(ip);
    return ip4Address || ip6Address;
};
exports.validIp = validIp;
const getIpFromDomain = (domain) => {
    const ip = new Promise((resolve, reject) => {
        const ipRetrieverTimer = setTimeout(() => {
            reject('The domain ip cannot be found');
        }, 2000);
        dns.lookup(domain, (err, address) => {
            clearTimeout(ipRetrieverTimer);
            if (err)
                reject(`Invalid domain provided for: ${err.hostname}`);
            resolve(address);
        });
    });
    return ip;
};
exports.getIpFromDomain = getIpFromDomain;
//# sourceMappingURL=IpHelpers.js.map