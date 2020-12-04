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
exports.ReverseDnsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ReverseDnsSchema_1 = require("./ReverseDnsSchema");
const ReverseDnsResponse_1 = require("./ReverseDnsResponse");
const utilities_1 = require("../utilities");
let ReverseDnsResolver = class ReverseDnsResolver {
    getReverseDnsData(ip, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (domain && !ip)
                    ip = yield utilities_1.getIpFromDomain(domain);
            }
            catch (err) {
                return {
                    success: false,
                    error: `Err: ${err}`,
                    data: undefined,
                };
            }
            if (ip && !utilities_1.validIp(ip))
                return {
                    success: false,
                    error: 'Invalid Ip Address Provided',
                    data: undefined,
                };
            try {
                const reverseDnsData = yield utilities_1.reverseDns(ip);
                if (!reverseDnsData) {
                    return {
                        success: false,
                        error: 'No ReverseDns Data',
                        data: undefined,
                    };
                }
                else {
                    console.log('IM THE REAL DATA', reverseDnsData);
                    return {
                        success: true,
                        error: undefined,
                        data: { reverseDns: reverseDnsData },
                    };
                }
            }
            catch (err) {
                return {
                    success: false,
                    error: 'No ReverseDns Data',
                    data: undefined,
                };
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => ReverseDnsResponse_1.ReverseDnsResponse),
    __param(0, type_graphql_1.Arg('ip')),
    __param(1, type_graphql_1.Arg('domain')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReverseDnsResolver.prototype, "getReverseDnsData", null);
ReverseDnsResolver = __decorate([
    type_graphql_1.Resolver(() => ReverseDnsSchema_1.ReverseDnsSchema)
], ReverseDnsResolver);
exports.ReverseDnsResolver = ReverseDnsResolver;
//# sourceMappingURL=ReverseDnsResolver.js.map