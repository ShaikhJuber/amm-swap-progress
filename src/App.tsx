import React from 'react';
import './App.css';
import Liquiditymain from './liquidity-component/Liquiditymain';
import Wallet from './WalletComponent/Wallet';


const App: React.FC = () =>{
  return (
    <div>
    <Wallet />
    <Liquiditymain />
    </div>
  );
}

export default App;
