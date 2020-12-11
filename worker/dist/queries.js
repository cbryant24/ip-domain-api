"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.getQuery = (service, ip) => {
    const queries = {
        getGeoIpData: graphql_tag_1.default `
      {
        getGeoIpData(domain: "${ip}"){
          data {
            range
            country
            region
            eu
            timezone
            city
            ll
            metro
            area	
          }
          success
          error
        }
      }
    `,
        getPingData: graphql_tag_1.default `
      {
        getPingData(domain: "${ip}") {
          data {
            host
            numeric_host
            alive
            output
            orgTechPhone
            orgTechEmail
          }
          success
          error
        }
      }
    `,
        getRdapData: graphql_tag_1.default `
      {
        getRdapData(domain: "${ip}"){
          data {
            orgName
            address
            city
            stateProv
            postalCode
            country
            orgTechPhone
            orgTechEmail
          }
          success
          error
        }
      }
    `,
        getReverseDnsData: graphql_tag_1.default `
      {
        getReverseDnsData(domain: "${ip}") {
          data {
            reverseDns
          }
          success
          error
        }
      }
    `
    };
    return queries[service];
};
//# sourceMappingURL=queries.js.map