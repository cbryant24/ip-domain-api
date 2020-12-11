import React, { useState } from 'react';
import { Div, H1 } from '@cbryant24/styled-react';

import { IpServicesForm } from './IpServicesForm';

export function IpDisplay() {
  const [ipDisplayData, setIpDisplayData] = useState('');

  return (
    <Div
      fontSizeModule={[1]}
    >
      <H1 fontSize={[2]}>Ip Services Form</H1>
      <IpServicesForm
        setIpData={setIpDisplayData}
      />
    </Div>
  )
}
