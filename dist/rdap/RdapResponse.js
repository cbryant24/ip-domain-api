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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdapResponse = void 0;
const type_graphql_1 = require("type-graphql");
const RdapSchema_1 = require("./RdapSchema");
let RdapResponse = class RdapResponse {
};
__decorate([
    type_graphql_1.Field(() => Boolean),
    __metadata("design:type", Boolean)
], RdapResponse.prototype, "success", void 0);
__decorate([
    type_graphql_1.Field(() => RdapSchema_1.RdapSchema),
    __metadata("design:type", Object)
], RdapResponse.prototype, "data", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", Object)
], RdapResponse.prototype, "error", void 0);
RdapResponse = __decorate([
    type_graphql_1.ObjectType({ description: 'Rdap Response' })
], RdapResponse);
exports.RdapResponse = RdapResponse;
//# sourceMappingURL=RdapResponse.js.map