import React, { useState, useEffect } from "react"
import { formatAccount } from "../Abi-Component/mainabi";
import "../WalletComponent/style";
import * as Styled from "../WalletComponent/style";






async function readAddress() {
  const method = "eth_requestAccounts";

  

  const accounts = await window.ethereum.request<string[]>({
    method,

    
  });

  return accounts[0];
}




const WalletConnect: React.FC<{

  onChange: (address: string | undefined) => void;

}> = ({ onChange }) => {

  const [address, setAddress] = useState<string | undefined>();
//console.log(getSelectedAddress);


  const connectWallet = async () => {
    const selectedAddress = await readAddress();

    setAddress(selectedAddress);
    onChange(selectedAddress);
  };

  console.log(address);

  //useEffect(() => {
    //const eventName = `accountsChanged`;

   // if (!isMetaMaskInstalled()) {
    //  return;
  //  }

    //const listener = ([selectedAddress]: string[]) => {
     // setAddress(selectedAddress);
      //onChange(selectedAddress);
   // };

   // window.ethereum.on(eventName, listener);

    //return () => {
      //window.ethereum.removeListener(eventName, listener);
  //  };
 // }, [onChange]);

  //if (!isMetaMaskInstalled()) {
    //return <> No wallet found. Please install MetaMask.</>;
  //}

  if (address) {
    return <Styled.Adderss>Connect:{formatAccount(address)}</Styled.Adderss>;
  }

  return <Styled.Button onClick={connectWallet}>Connect Wallet</Styled.Button>;
  
  
};
   

export default WalletConnect;


declare global {
  interface Window {
    ethereum: {
      removeListener<T>(event: string, cb: (params: T) => void): void;

      request<T>(params: { method: string }): Promise<T>;

      on<T>(event: string, cb: (params: T) => void): void;

      selectedAddress: string | undefined;

      WalletConnect: any;

      onChange: any;
      
    };
  }
}
