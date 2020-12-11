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
const apolloClient = require("apollo-client");
const apolloLinkHttp = require("apollo-link-http");
const apolloCacheInmemory = require("apollo-cache-inmemory");
const helper_1 = require("./helper");
const queries_1 = require("./queries");
const fetch = require("node-fetch");
const { ApolloClient } = apolloClient;
const { createHttpLink } = apolloLinkHttp;
const { InMemoryCache } = apolloCacheInmemory;
const httpLink = createHttpLink({
    uri: "http://graphapi:8080/graphql",
    fetch: fetch
});
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});
const query = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body || !req.body.data) {
        res.sendStatus(500);
        return;
    }
    const isValidData = helper_1.validBodyData(req.body);
    if (!isValidData) {
        res.status(422).send({
            success: false,
            message: 'Validation failed',
        });
        return;
    }
    const queries = req.body.data.services.map((service) => {
        const serviceQuery = queries_1.getQuery(service, req.body.data.ip);
        return client.query({ query: serviceQuery });
    });
    Promise.all(queries).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).send(JSON.stringify(err));
    });
});
exports.apollo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    switch (req.method) {
        case "POST":
        default:
            return yield query(req, res);
    }
});
//# sourceMappingURL=apollo.js.map