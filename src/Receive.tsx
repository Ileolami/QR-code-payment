import { useParams } from 'react-router-dom';
import ConnectBtn from './connectWallet';
import { useAccount,useWriteContract } from 'wagmi';
import { deployedContract } from './contract/deployedContract';

const ReceivePayment = () => {
  const { address:sendersAddress, amount } = useParams();
const {address} = useAccount();
const { writeContractAsync } = useWriteContract();


  const addressShorter = (address: string | undefined) => {
 if (address){
     return `${address.slice(0, 6)}...${address.slice(-4)}`;
 }
}
const handleCLick = () => {
  writeContractAsync({ 
      abi: deployedContract.abi,
      address: deployedContract.address,
      functionName: 'withdraw',
      args: [sendersAddress]
  }, {

  })
}

return (
    <div className="flex flex-col items-center justify-center h-dvh p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Receive Payment</h1>
        <p className="text-lg text-gray-700 mb-6">
          You are about to receive <span className="font-semibold">{amount} ETH</span> from <span className="font-semibold">{addressShorter(sendersAddress)}</span>
        </p>
       {
        address ? (
            <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition duration-300"
            onClick={handleCLick}
            >
            Confirm
          </button>
        ) : (
            <ConnectBtn text="Connect to claim" />

        )
       }
      </div>
    </div>
  );
};

export default ReceivePayment;