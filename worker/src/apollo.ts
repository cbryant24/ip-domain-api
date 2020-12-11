import * as apolloClient from 'apollo-client';
import * as apolloLinkHttp from 'apollo-link-http';
import * as apolloCacheInmemory from 'apollo-cache-inmemory';
import { Request, Response } from 'express';

import { validBodyData } from './helper';
import { getQuery } from './queries';

const fetch = require("node-fetch");
const { ApolloClient }  = apolloClient;
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

const query = async (req: Request, res: Response): Promise<void> => {
  if (!req.body || !req.body.data) {
    res.sendStatus(500);
    return;
  }

  const isValidData = validBodyData(req.body)

  if (!isValidData) {
    res.status(422).send({
      success: false,
      message: 'Validation failed',
    });
    return;
  }

  const queries = req.body.data.services.map( (service: string): Promise<any> => {
    const serviceQuery = getQuery(service, req.body.data.ip);
    return client.query({query: serviceQuery});
  });

  Promise.all(queries).then((data: any): void => {
    res.status(200).json(data);
  }).catch((err) => {
    res.status(500).send(JSON.stringify(err));
  });
};

export const apollo = async (req: Request, res: Response): Promise<void> => {
  switch (req.method) {
    case "POST":
    default:
      return await query(req, res);
  }
};
