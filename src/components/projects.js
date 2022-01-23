import Project from "./project";
import { ethers }  from "ethers"
import TempNFT from "./TempNFT.json"
import { useState, useEffect } from 'react';
const ContractAddress = "0xeFe1023DCa77bD092D85ABe07447c81496BF32aE";
export default function Projects() {
	const [projects, setProjects] = useState([1])
	let [listedNftDetails, setAllNfts] = useState([])
	let [listedNftId, setAllNftIds] = useState([]);

	const [account, setAccount] = useState(null)
	 useEffect(getAllNFts, []);

    const checkWalletConnected = async () => {
		const { ethereum } = window
		
		if(!ethereum) {
			console.log('Install Metamask')
			return
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' })

		if(accounts.length !== 0) {
			const account = accounts[0]
			console.log("Found Account, ", account)
			let provider = new ethers.providers.Web3Provider(window.ethereum)
			let network = await provider.getNetwork()
			setAccount(account)
			if(network.name !==  "maticmum") {
				alert("not connected to polygon mumbai testnet, please change the network to polygon mumbai testnet ")
			}
			else {
				console.log('maticmum connected');
				
			}
		} else {
			console.log("Create a Ethereum Account")
		}
	}

	async function getAllNFts() {
		await checkWalletConnected();

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		let contract = new ethers.Contract(ContractAddress, TempNFT.abi, provider );
		const getAllIds = await contract.getAllNFTIds();
		console.log(getAllIds.length);
		setAllNftIds(getAllIds);
        
         let AllNFTArray = [];
		for (let index = 0; index < getAllIds.length; index++) {
          let nft = await contract.getNftFromGlobalId(index);
		  console.log(nft);

		  AllNFTArray.push(nft);
		  
		}
		setAllNfts(AllNFTArray); 
		
		console.log(listedNftDetails);
		
		
	} 
	return (
		<div className="w-full h-full flex justify-center items-center flex-col bg-black p-10 text-white space-y-10">
			<div className="flex justify-center items-center flex-col">
				<p className="text-xl font-semibold">Borrow latest artwork with most valued bids</p>
				<h1 className="text-8xl font-bold">Trending NFTs</h1>
			</div>
			<div className="w-full h-full grid grid-cols-5 gap-4">
				{listedNftDetails.map( nft => (<Project title="NFT Title Goes here" hourlyRate={nft.hourlyRate} dailyRate={nft.dailyRate} minimumCollateral={nft.minimumCollateral}></Project>))}
				
			</div>
		</div>
	)
}