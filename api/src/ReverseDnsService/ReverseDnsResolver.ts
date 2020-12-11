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
      const reverseDnsData = await reverseDns<String[]>(ip);

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
          data: { reverseDns: reverseDnsData },
        };
      }
    } catch (err) {
      return {
        success: false,
        error: 'No ReverseDns Data',
        data: undefined,
      };
    }
  }
}
