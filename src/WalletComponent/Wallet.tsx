import React, { useState, useCallback } from "react";
//import "./style.css";
import WalletConnect from "./WalletConnect";

export default function Wallet() {
  const [, setSelectedAddress ] = useState<string>();

  const addressChanged = useCallback((address: string | undefined) => {
    setSelectedAddress(address);
  }, []);

  return (
   
    <div className="Wallet">
  
      <WalletConnect onChange={addressChanged} />
    
    </div>
    
  );
}
