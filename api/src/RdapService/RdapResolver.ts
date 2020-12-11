// const whois = require('whois');
const whois = require('whois-json');
import { Arg, Query, Resolver } from 'type-graphql';
import { RdapSchema } from './RdapSchema';
import { RdapResponse } from './RdapResponse';
import { validIp, getIpFromDomain } from '../utilities';

@Resolver(() => RdapSchema)
export class RdapResolver {
  @Query(() => RdapResponse)
  async getRdapData(
    @Arg('ip') ip: string,
    @Arg('domain') domain: string
  ): Promise<RdapResponse> {
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
    const rDapData = await whois(ip);
    if (rDapData) {
      if (!rDapData) {
        return {
          success: false,
          error: 'No RDAP Data',
          data: undefined,
        };
      } else {
        return {
          success: true,
          error: undefined,
          data: rDapData,
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
