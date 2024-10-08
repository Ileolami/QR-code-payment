import { QRCodeSVG } from 'qrcode.react';
import ConnectBtn from './connectWallet';
import { useEffect, useState } from 'react';
import { useAccount,useWriteContract } from 'wagmi';
import { deployedContract } from './contract/deployedContract';
import { parseEther } from 'viem';
import Loading from './components/Loading';

const CreatePayment = () =>{
    const [amount, setAmount] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
    const {address} = useAccount();
    const { writeContractAsync, isSuccess, isPending } = useWriteContract()


  const generateQRCode = async () => {
    if (!amount) return
        await writeContractAsync({ 
            abi: deployedContract.abi,
            address: deployedContract.address,
            functionName: 'sendPayment',
            value: parseEther(amount),
        })
  };
  useEffect(() => {
    if(isSuccess) {
        setQrValue(`https://arbitrum-qr-pay.vercel.app/receive/${amount}/${address}`);
        setIsModalOpen(true);
    }
  }, [isSuccess, isPending, address, amount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    if (!value) {
      setQrValue('');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <ConnectBtn />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-slate-50">Arbitrum QR Pay</h1>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
          <input
            type="number"
            value={amount}
            onChange={handleInputChange}
            className="border border-gray-300 bg-gray-100 rounded p-2 sm:p-3 mb-4 w-full focus:ring-2 focus:ring-blue-500 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="Enter amount"
          />
          <button
            onClick={generateQRCode}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300"
          >
           {isPending ? <Loading /> : "Generate"} 
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <span className=' text-white text-2xl'>&times;</span>
            </button>
            <div className="flex justify-center">
              <QRCodeSVG value={qrValue} className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatePayment