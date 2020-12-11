import React, { useState } from 'react';
import axios from 'axios';

import { Div, P } from '@cbryant24/styled-react';
import isIp from 'is-ip';
import isValidDomain from 'is-valid-domain';

interface IpServices {
  getGeoIpData: boolean,
  getPingData: boolean,
  getRdapData: boolean,
  getReverseDnsData: boolean,
}

export function IpServicesForm(props: any) {
  const [displayError, setDisplayError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [ipServices, setIpServices] = useState({
    getGeoIpData: false,
    getPingData: false,
    getRdapData: false,
    getReverseDnsData: false
  });

  function handleInputChange(event: {target: { value: string }}): void {
    setInputValue(event.target.value);
    if (displayError) {
      setDisplayError(false);
    }
  }

  function handleCheckBoxChange(event: {target: { value: string}}): void {
    setIpServices({...ipServices, [event.target.value]: !ipServices[event.target.value as keyof IpServices]});
  }

  async function handleSubmit(event: { preventDefault: () => void}): Promise<void> {
    event.preventDefault()
    const { validAddress, address } = validateIpDomain(inputValue);
    let services: string[] = [];

    if (!validAddress) {
      setDisplayError(true);
      return;
    }

    ((): void => {
      for (let service in ipServices) {
        if (ipServices[service as keyof IpServices]) services.push(service)
      }

      if (!services.length) {
        services = Object.keys(ipServices);
      }
    })()
    
    const { data } = await axios.post('/ip-services', {
      data: {
        ip: address,
        services: services
      }
    });
  }

  function validateIpDomain(address: string): { validAddress: boolean, address: string } {
    let validAddress = isIp(address);
    let trimmedDomain = '';
    if (!validAddress) {
      trimmedDomain = address.replace('https://', '').replace('www.', '');
      validAddress = isValidDomain(trimmedDomain);
    }

    return {
      validAddress,
      address: trimmedDomain ? trimmedDomain : address
    }
  }

  return (
    <Div fontSize={[2]}>
      {displayError ? <P fontSize='12px' color='red'>`Please enter a valid ip address or domain, {inputValue} is not valid`</P> : ''}
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Ip or Domain:
          <input value={inputValue} type="text" onChange={(event) => handleInputChange(event)} name="ip-domain-input"/><br/>
        </label>
        <input onChange={(event) => handleCheckBoxChange(event)} type="checkbox" id="geo-service" name="geo-service" value="getGeoIpData"/>
        <label htmlFor="geo-service">Geo Data</label><br/>
        <input onChange={(event) => handleCheckBoxChange(event)} type="checkbox" id="ping-service" name="ping-service" value="getPingData"/>
        <label htmlFor="ping-service">Ping Data</label><br/>
        <input onChange={(event) => handleCheckBoxChange(event)} type="checkbox" id="rdap-data" name="rdap-data" value="getRdapData"/>
        <label htmlFor="rdap-data">Rdap Data</label><br/> 
        <input onChange={(event) => handleCheckBoxChange(event)} type="checkbox" id="reverse-dns" name="reverse-dns" value="getReverseDnsData"/>
        <label htmlFor="reverse-dns">Reverse-DNS Data</label><br/> 
        <input type="submit" value="Submit"/>
      </form>
    </Div>)
}