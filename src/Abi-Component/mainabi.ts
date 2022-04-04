import Web3 from 'web3';
import { pairAddress, spenderAddress, token0, token1 } from './abiaddress';
import { pairAbi, spenderAbi, token0Abi, token1Abi  } from './abitest';

const web3 = new Web3(
    Web3.givenProvider || "https://data-seed-prebsc-2-s3.binance.org:8545/"
);
//console.log(web3);

export const getReservesFromPair = async () => {
    try {
      let Pair = new web3.eth.Contract(pairAbi, pairAddress);
      let reserves = await Pair.methods.getReserves().call();
      
      //console.log(getReservesFromPair)
      return reserves;
    } catch (error) {
     console.log(error)
    }
  };
  
  export const getPriceOfOtherToken = async (
    amountA: any,
    reserveA: any,
    reserveB: any
  ) => {
    try {
    //  console.log("amountA", amountA);
     
      let Spender = new web3.eth.Contract(spenderAbi, spenderAddress);
      let amount = await Spender.methods
        .quote(amountA, reserveA, reserveB)
        .call();
      return amount;
    } catch (error) {
     
    }
  };
  
  
  
  

// utilities file
export const formatAccount = (acc: any) =>
  `${acc.slice(0, 6)}...${acc.slice(-4)}`;
