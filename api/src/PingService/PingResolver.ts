// const whois = require('whois');
const ping = require('ping');
import { Arg, Query, Resolver } from 'type-graphql';
import { PingSchema } from './PingSchema';
import { PingResponse } from './PingResponse';
import { validIp, getIpFromDomain } from '../utilities';

@Resolver(() => PingSchema)
export class PingResolver {
  @Query(() => PingResponse)
  async getPingData(
    @Arg('ip') ip: string,
    @Arg('domain') domain: string
  ): Promise<PingResponse> {
    try {
      if (domain && !ip) ip = await getIpFromDomain(domain);
    } catch (err) {
      return {
        success: false,
        error: `Err: ${err}`,
        data: undefined,
      };
    }

    if (ip && !validIp(ip))
      return {
        success: false,
        error: 'Invalid Ip Address Provided',
        data: undefined,
      };
    const pingData: PingSchema = await ping.promise.probe(ip, {
      timeout: 10,
      extra: ['-i', '2'],
    });
    if (pingData) {
      if (!pingData) {
        return {
          success: false,
          error: 'No RDAP Data',
          data: undefined,
        };
      } else {
        return {
          success: true,
          error: undefined,
          data: pingData,
        };
      }
    } else {
      return {
        success: false,
        error: 'Invalid Ip or Domain provided',
        data: undefined,
      };
    }
  }
}
