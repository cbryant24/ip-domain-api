const geoip = require('geoip-lite');
import { Arg, Query, Resolver } from 'type-graphql';
import { GeoIpSchema } from './GeoIpSchema';
import { GeoIpResponse } from './GeoIpResponse';
// import { IsIP } from 'class-validator';
import { validIp, getIpFromDomain } from '../utilities';

// interface Ip {
//   ip: @IsIP(version?: "4"|"6")
// }

@Resolver(() => GeoIpSchema)
export class GeoIpResolver {
  @Query(() => GeoIpResponse)
  async getGeoIpData(
    @Arg('ip') ip: string,
    @Arg('domain') domain: string
    // @Ctx() ctx: any
  ): Promise<GeoIpResponse> {
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

    const geoIpData = geoip.lookup(ip);

    if (geoIpData) {
      if (!geoIpData) {
        return {
          success: false,
          error: 'No GeoIp Data',
          data: undefined,
        };
      } else {
        return {
          success: true,
          error: undefined,
          data: geoIpData,
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
