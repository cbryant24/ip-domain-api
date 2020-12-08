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
exports.GeoIpSchema = void 0;
const type_graphql_1 = require("type-graphql");
let GeoIpSchema = class GeoIpSchema {
};
__decorate([
    type_graphql_1.Field(() => [Number]),
    __metadata("design:type", Array)
], GeoIpSchema.prototype, "range", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], GeoIpSchema.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], GeoIpSchema.prototype, "region", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], GeoIpSchema.prototype, "eu", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], GeoIpSchema.prototype, "timezone", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], GeoIpSchema.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(() => [Number]),
    __metadata("design:type", Array)
], GeoIpSchema.prototype, "ll", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], GeoIpSchema.prototype, "metro", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], GeoIpSchema.prototype, "area", void 0);
GeoIpSchema = __decorate([
    type_graphql_1.ObjectType({ description: 'GeoIp Schema' })
], GeoIpSchema);
exports.GeoIpSchema = GeoIpSchema;
//# sourceMappingURL=GeoIpSchema.js.map