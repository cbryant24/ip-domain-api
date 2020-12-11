import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { GeoIpResolver } from './GeoIpService';
import { RdapResolver } from './RdapService';
import { ReverseDnsResolver } from './ReverseDnsService';
import { PingResolver } from './PingService';

async function startServer() {
  const schema = await buildSchema({
    resolvers: [GeoIpResolver, RdapResolver, ReverseDnsResolver, PingResolver],
    emitSchemaFile: true,
    nullableByDefault: true,
  });

  const app = Express();

  const server = new ApolloServer({
    schema
  });
  server.applyMiddleware({ app });
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
  });
}

startServer();
