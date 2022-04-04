import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import * as Styled from "./Style";

import { spenderAddress, token0, token1 } from "../Abi-Component/abiaddress";
import {
  getReservesFromPair,
  getPriceOfOtherToken
  




} from '../Abi-Component/mainabi'
import { getAccountPath } from "ethers/lib/utils";


const Liquiditymain: React.FC = () => {
  const [ addLiquidity, setAddLiquidity ] = useState(false);
  const [ removeLiquidity, setRemoveLiquidity ] = useState(false);
  const [ coin0, setCoin0 ] = useState("");
  const [ coin1, setCoin1 ] = useState("");
  const [ pocketAddress, setPocketAddress ] = useState("")
  const [ reserve0, setReserve0 ] = useState("");
  const [ reserve1, setReserve1 ] = useState("");
  const [ token0, setToken0 ] = useState("");
  const [ token1, setToken1 ] = useState("");


const web3 = new Web3(
  Web3.givenProvider || "https://data-seed-prebsc-2-s3.binance.org:8545/"
);

const { active, account, library, connector, activate, deactivate, chainId } =
useWeb3React();

const toggleAddLiquidity = () => {
  setAddLiquidity((prevState) => !prevState)
};

const toggleRemoveLiquidity = () => {
  setRemoveLiquidity((prevState) => !prevState)
}





const getReserves = async (library: any) => {

  if (library !== undefined && active) {
   // console.log("account", account);
    if (chainId === 97) {
      const reserve = await getReservesFromPair();
      const address = await library.eth.getAccounts();

      setPocketAddress(address[0]);

      setReserve0(reserve._reserve0);
      setReserve1(reserve._reserve1);
    }

  }
}
//console.log(getReservesFromPair);






  useEffect(() => {
      getReserves(library)
  },[account, active])

 
  
  return (
    <>
       

        <Styled.AddLiqMainDiv>
     
          <Styled.AddLiqTopDiv>
          
            <Styled.AddLiqInnerDivHeading>
            <Styled.AddButton onClick={toggleAddLiquidity}>Add</Styled.AddButton>
            <Styled.RemoveButton onClick={toggleRemoveLiquidity}>Remove</Styled.RemoveButton>
            </Styled.AddLiqInnerDivHeading>
          </Styled.AddLiqTopDiv>

          <Styled.AddLiqFirstInput>
            <Styled.InputBalance>

            <div className="inputext">Input</div>
            <div className="balance">Balance: 000</div>
          
            </Styled.InputBalance>
               <Styled.AddLiqPageInput>
              
              <input className="textarea" type="search" placeholder="0.0" />
              <Styled.AddLiqBUSD>BUSD</Styled.AddLiqBUSD>
              </Styled.AddLiqPageInput>
          </Styled.AddLiqFirstInput>


          <Styled.PluseIcon>
            <div className="pluseicon">+</div>
          </Styled.PluseIcon>


          <Styled.AddLiqSecondInput>
          <Styled.InputBalance>

             <div className="inputext">Input</div>
             <div className="balance">Balance: 000</div>

          </Styled.InputBalance>
            <Styled.AddLiqPageInput>
              
              <input className="textarea" type="search" placeholder="0.0"/>
              <Styled.AddLiqBUST>BUST</Styled.AddLiqBUST>
            </Styled.AddLiqPageInput>
            
          </Styled.AddLiqSecondInput>

          <Styled.Button>Supply</Styled.Button>
 
          
        </Styled.AddLiqMainDiv>
    
      </>
  );
};

export default Liquiditymain;


