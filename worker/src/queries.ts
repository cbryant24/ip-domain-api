import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

interface IpServices {
  getGeoIpData: DocumentNode,
  getPingData: DocumentNode,
  getRdapData: DocumentNode,
  getReverseDnsData: DocumentNode,
}


export const getQuery = (service: string, ip: string): DocumentNode => {
  const queries = {
    getGeoIpData: gql`
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
    getPingData: gql`
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
    getRdapData: gql`
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
    getReverseDnsData: gql`
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
  }

  return queries[service as keyof IpServices];
}