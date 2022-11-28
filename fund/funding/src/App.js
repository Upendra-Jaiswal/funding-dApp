import {useState,useEffect} from 'react';
import Web3 from "web3";
import "./App.css";
import detectEthereumProvider from '@metamask/detect-provider';
import {loadContract} from "./utils/load-contract";

function App() {
  const [web3api,setweb3api] = useState({
    provider:null,
    web3:null,
    contract:null,
  })
const [account,setAccount] = useState(null);
const [balance,setBalance] = useState(null);
const [reload,shouldReload] = useState(false);

const reloadEffect =()=>shouldReload(!reload);

  useEffect(() => {
    const loadProvider = async()=>{
    //   console.log(window.web3)
    //   console.log(window.ethereum)
    //let provider = null;
   const provider = await detectEthereumProvider();
   const contract = await loadContract("funder",provider);

   if(provider){
    provider.request({method:"eth_requestAccounts"});
    setweb3api({
      web3:new Web3(provider),
      provider,
      contract,
    });
   }
   else{
    console.log('Please install MetaMask!');
   }
    // if(window.ethereum){
    //   provider=window.ethereum;
    //   try {
    //     await provider.enable();
    //   }catch{
    //     console.log("User is not allowed");
    //   }
    // }
    // else if(window.web3){
    //   provider=window.web3.currentProvider;
    // }
    // else if(!process.env.production){
    //   provider = new Web3.provider.HttpProvider("http://localhost:7545");
    // }



    };
    loadProvider();
        },[])

useEffect(()=>{
const loadBalance = async()=>{
  const {contract,web3} = web3api;
  const balance = await web3.eth.getBalance(contract.address);
  setBalance(web3.utils.fromWei(balance,"ether"));
};
  web3api.contract && loadBalance();
},[web3api],reload);

const transferFund = async()=>{
  const {web3,contract}= web3api;
  await contract.transfer ({
    from:account,
    value:web3.utils.toWei("2","ether")

  })
  reloadEffect();
}

const withdrawFund =  async()=>{
  const {web3,contract} = web3api;
  const withdrawAmount = web3.utils.toWei("2","ether");
  await contract.withdraw (withdrawAmount,{
    from:account
  })
  reloadEffect();

}

useEffect(()=>{
const getAccount = async()=>{
  const accounts = await web3api.web3.eth.getAccounts();
  setAccount(accounts[0])
}
web3api.web3 && getAccount()
},[web3api.web3])


console.log(web3api.web3);


  return (

    <>
      <div class="card text-center">
        <div class="card-header">Funding</div>
        <div class="card-body">
          <h5 class="card-title">Balance: {balance} ETH </h5>
          <p class="card-text">
            Account : {account ? account : "not connected"}
          </p>
          {/* <button type = "button" class = "btn btn-success" onClick={async()=>{
            const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
            console.log(accounts)
          }} >
            connect to metamask
          </button> */}
          &nbsp;
          <button type="button" class="btn btn-success " onClick= {transferFund}>
            Transfer
          </button>
          &nbsp;
          <button type="button" class="btn btn-primary " onClick = {withdrawFund}>
            Withdraw
          </button>
        </div>
        <div class="card-footer text-muted">Code Eater</div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div class="card text-center">
  //       <div class="card-header">Funding</div>
  //       <div class="card-body">
  //         <h5 class="card-title">Balance: {balance} ETH </h5>
  //         <p class="card-text">
  //           Account : {account ? account : "not connected"}
  //         </p>
  //         {/* <button
  //           type="button"
  //           class="btn btn-success"
  //           onClick={async () => {
  //             const accounts = await window.ethereum.request({
  //               method: "eth_requestAccounts",
  //             });
  //             console.log(accounts);
  //           }}
  //         >
  //           Connect to metamask
  //         </button> */}
  //         &nbsp;
  //         <button type="button" class="btn btn-success " onClick={transferFund}>
  //           Transfer
  //         </button>
  //         &nbsp;
  //         <button type="button" class="btn btn-primary " onClick={withdrawFund}>
  //           Withdraw
  //         </button>
  //       </div>
  //       <div class="card-footer text-muted">Code Eater</div>
  //     </div>
  //   </>
  // );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
