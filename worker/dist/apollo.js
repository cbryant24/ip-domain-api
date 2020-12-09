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
const graphql_tag_1 = require("graphql-tag");
const apolloClient = require("apollo-client");
const apolloLinkHttp = require("apollo-link-http");
const apolloCacheInmemory = require("apollo-cache-inmemory");
const fetch = require("node-fetch");
const { ApolloClient } = apolloClient;
const { createHttpLink } = apolloLinkHttp;
const { InMemoryCache } = apolloCacheInmemory;
const httpLink = createHttpLink({
    uri: "http://nod:8080/graphql",
    fetch: fetch
});
console.log("IM THE HttpLink", httpLink);
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});
const query = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body || !req.body.query) {
        res.sendStatus(500);
        return;
    }
    const query = graphql_tag_1.default(req.body.query);
    let variables = undefined;
    if (req.body.variables) {
        variables = JSON.parse(decodeURIComponent(req.body.variables));
    }
    try {
        const result = yield client.query({
            query,
            variables
        });
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500).send(JSON.stringify(err));
    }
});
exports.apollo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    switch (req.method) {
        case "POST":
        case "GET":
        default:
            yield query(req, res);
    }
    next();
});
//# sourceMappingURL=apollo.js.map