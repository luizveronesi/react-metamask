import { MetaMaskProvider } from '@metamask/sdk-react';
import React from 'react';
import PublicRoutes from './routes/PublicRoutes';

export default function App() {
  const metamaskOptions = {
    dappMetadata: {
      name: 'react-metamask',
      url: `${window.location.protocol}//${window.location.host}`,
    },
    enableDebug: false,
  };

  return (
    <React.StrictMode>
      <MetaMaskProvider debug={false} sdkOptions={metamaskOptions}>
        <PublicRoutes />
      </MetaMaskProvider>
    </React.StrictMode>
  );
}
