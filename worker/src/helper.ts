import validator from 'validator';
// import isValidDomain from 'is-valid-domain';

const isIp = require('is-ip');
const isValidDomain = require('is-valid-domain');
export const validBodyData = (body: any): boolean => {

  body.data.services.forEach((service: string): boolean | void => {
    if (!validator.isAlpha(service)) 
      return false;
  });

  if (!isIp(body.data.ip) && !isValidDomain(body.data.ip))
    return false;

  return true;
};
