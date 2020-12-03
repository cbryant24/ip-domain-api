"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.RdapResolver = void 0;
const whois_1 = require("whois");
const type_graphql_1 = require("type-graphql");
const RdapSchema_1 = require("./RdapSchema");
const RdapResponse_1 = require("./RdapResponse");
const utilities_1 = require("../utilities");
let RdapResolver = class RdapResolver {
    getRdapData(ip, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (domain && !ip)
                    ip = yield utilities_1.getIpFromDomain(domain);
            }
            catch (err) {
                return {
                    success: false,
                    error: `Err: ${err}`,
                    data: null,
                };
            }
            if (ip && !utilities_1.validIp(ip))
                return {
                    success: false,
                    error: 'Invalid Ip Address Provided',
                    data: null,
                };
            const rDapData = whois_1.default.lookup(ip);
            console.log('IM THE RDAP', rDapData);
            if (rDapData) {
                console.log(rDapData);
                if (!rDapData) {
                    return {
                        success: false,
                        error: 'No GeoIp Data',
                        data: null,
                    };
                }
                else {
                    return {
                        success: true,
                        error: null,
                        data: rDapData,
                    };
                }
            }
            else {
                return {
                    success: false,
                    error: 'Invalid Ip or Domain provided',
                    data: null,
                };
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => RdapResponse_1.RdapResponse),
    __param(0, type_graphql_1.Arg('ip')),
    __param(1, type_graphql_1.Arg('domain')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RdapResolver.prototype, "getRdapData", null);
RdapResolver = __decorate([
    type_graphql_1.Resolver(() => RdapSchema_1.RdapSchema)
], RdapResolver);
exports.RdapResolver = RdapResolver;
//# sourceMappingURL=RdapResolver.js.map