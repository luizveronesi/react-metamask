import metamask from '@/assets/metamask-25x25.png';
import { useSDK } from '@metamask/sdk-react';
import './style.scss';

export default function Home() {
  const { sdk } = useSDK();

  const handleLogin = async () => {
    try {
      const accounts = await sdk?.connect();
      if (accounts && Array.isArray(accounts)) {
        alert(accounts[0] as string);
      }
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  return (
    <div className="home-container">
      <div className="box">
        <button type="button" className="btn-metamask" onClick={handleLogin}>
          <img src={metamask} alt="MetaMask" />
          Clik here to login with Metamask
        </button>
      </div>
    </div>
  );
}
