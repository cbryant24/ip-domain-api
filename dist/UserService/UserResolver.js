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
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const UserSchema_1 = require("./UserSchema");
const UserResponse_1 = require("./UserResponse");
const bcrypt = require("bcrypt");
let UserResolver = class UserResolver {
    loginUser(email, password, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield ctx.userModel.findOne({
                email: email,
            });
            if (user) {
                const err = yield bcrypt.compare(password, user.password);
                if (!!err) {
                    return {
                        success: false,
                        error: 'Invalid Credetials',
                        data: null,
                    };
                }
                else {
                    return {
                        success: true,
                        error: null,
                        data: user,
                    };
                }
            }
            else {
                return {
                    success: false,
                    error: 'User Not Found',
                    data: null,
                };
            }
        });
    }
    registerUser(name, email, password, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt.hash(password, 12);
            const user = yield ctx.userModel.create({
                name,
                email,
                password: hashedPassword,
            });
            return user.save();
        });
    }
};
__decorate([
    type_graphql_1.Query(() => UserResponse_1.UserResponse),
    __param(0, type_graphql_1.Arg('email')),
    __param(1, type_graphql_1.Arg('password')),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "loginUser", null);
__decorate([
    type_graphql_1.Mutation(() => UserSchema_1.UserSchema),
    __param(0, type_graphql_1.Arg('name')),
    __param(1, type_graphql_1.Arg('email')),
    __param(2, type_graphql_1.Arg('password')),
    __param(3, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "registerUser", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(() => UserSchema_1.UserSchema)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolver.js.map