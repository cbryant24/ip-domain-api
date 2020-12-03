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
const apollo_server_express_1 = require("apollo-server-express");
const Express = require("express");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const GeoIpService_1 = require("./GeoIpService");
const RdapService_1 = require("./RdapService");
const ReverseDnsService_1 = require("./ReverseDnsService");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [GeoIpService_1.GeoIpResolver, RdapService_1.RdapResolver, ReverseDnsService_1.ReverseDnsResolver],
            emitSchemaFile: true,
            nullableByDefault: true,
        });
        const app = Express();
        const server = new apollo_server_express_1.ApolloServer({
            schema,
        });
        server.applyMiddleware({ app });
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`server is running on PORT ${PORT}`);
        });
    });
}
startServer();
//# sourceMappingURL=server.js.map