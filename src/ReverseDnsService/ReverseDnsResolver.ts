// const whois = require('whois');
const dns = require('dns');
import { Arg, Query, Resolver } from 'type-graphql';
import { ReverseDnsSchema } from './ReverseDnsSchema';
import { ReverseDnsResponse } from './ReverseDnsResponse';
import { validIp, getIpFromDomain, reverseDns } from '../utilities';

@Resolver(() => ReverseDnsSchema)
export class ReverseDnsResolver {
  @Query(() => ReverseDnsResponse)
  async getReverseDnsData(
    @Arg('ip') ip: string,
    @Arg('domain') domain: string
    // @Ctx() ctx: any
  ): Promise<ReverseDnsResponse> {
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
    try {
      const reverseDnsData = await reverseDns<ReverseDnsSchema>(ip);
      console.log('IM the reverse data', reverseDnsData);

      if (reverseDnsData) {
        if (!reverseDnsData) {
          return {
            success: false,
            error: 'No ReverseDns Data',
            data: undefined,
          };
        } else {
          return {
            success: true,
            error: undefined,
            data: reverseDnsData,
          };
        }
      } else {
        return {
          success: false,
          error: 'Invalid Ip or Domain provided',
          data: undefined,
        };
      }
    } catch (err) {
      return {
        success: false,
        error: `Err: ${err}`,
        data: undefined,
      };
    }
  }
}
