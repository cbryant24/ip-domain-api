import gql from 'graphql-tag';
import * as apolloClient from 'apollo-client';
import * as apolloLinkHttp from 'apollo-link-http';
// import * as apolloLinkContext from 'apollo-link-context';
import * as apolloCacheInmemory from 'apollo-cache-inmemory';
import { Request, Response, NextFunction } from 'express';

const fetch = require("node-fetch");
const { ApolloClient }  = apolloClient;
const { createHttpLink } = apolloLinkHttp;
// const { setContext } = apolloLinkContext;
const { InMemoryCache } = apolloCacheInmemory;

const httpLink = createHttpLink({
  uri: "http://nodejs:4000/graphql",
  fetch: fetch
});

console.log("IM THE HttpLink", httpLink);

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const query = async (req: Request, res: Response) => {
  if (!req.body || !req.body.query) {
    res.sendStatus(500);
    return;
  }

  const query = gql(req.body.query);
  let variables = undefined;
  if (req.body.variables) {
    variables = JSON.parse(decodeURIComponent(req.body.variables));
  }

  try {
    const result = await client.query({
      query,
      variables
    });
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(JSON.stringify(err));
  }
};

export const apollo = async (req: Request, res: Response, next: NextFunction) => {
  switch (req.method) {
    case "POST":

    case "GET":
    default:
      await query(req, res);
  }

  next();
};
