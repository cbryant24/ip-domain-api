import * as IpAddress from 'ip-address';
const dns = require('dns');
import { ReverseDnsSchema } from '../ReverseDnsService';

export const validIp = (ip: string): boolean => {
  const ip4Address = IpAddress.Address4.isValid(ip);
  const ip6Address = IpAddress.Address6.isValid(ip);

  return ip4Address || ip6Address;
};

export const getIpFromDomain = (domain: string): Promise<string> => {
  const ip: Promise<string> = new Promise((resolve, reject): void => {
    const ipRetrieverTimer = setTimeout(() => {
      reject('The domain ip cannot be found');
    }, 2000);

    dns.lookup(
      domain,
      (
        err: {
          hostname: string;
        },
        address: string
      ): void => {
        clearTimeout(ipRetrieverTimer);
        if (err) reject(`Invalid domain provided for: ${err.hostname}`);

        resolve(address);
      }
    );
  });

  return ip;
};

export function reverseDns<T>(ip: String): Promise<T> {
  const dnsData: Promise<T> = new Promise((resolve, reject) => {
    const dnsTimer = setTimeout(() => {
      reject('The domain ip cannot be found');
    }, 2000);

    dns.reverse(ip, (err: { message: String }, data: T) => {
      console.log('IM the reverse data', data);
      clearTimeout(dnsTimer);
      if (err) reject(`Invalid domain provided for: ${err.message}`);

      resolve(data);
    });
  });
  return dnsData;
}
