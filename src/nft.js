import Navbar from "./components/Navbar"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function NFT() {
	const { id } = useParams()
	
	return (
		<div className="w-full min-h-screen flex flex-col justify-center items-center">
			<div className="w-full">
				<Navbar></Navbar>
			</div>
			<div className="w-full mt-20 md:mt-0 flex flex-col md:flex-row justify-center items-center h-screen">
				<div className="w-full md:w-1/2 h-full flex justify-center items-center">
					<img className="w-1/2 h-11/12 rounded-md" src="https://images.unsplash.com/photo-1642922711341-27284de4cd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
				</div>
				<div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start space-y-3 px-16">
					<h1 className="text-3xl font-bold">Name of NFT #{id}</h1>
					<p className="text-lg font-semibold text-gray-400">Owned by 0x4324n3j5b32h5v2u3y5vr3h2...</p>
					<p className="text-md font-normal w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					<div className='text-xl w-full flex flex-col justify-center items-center'>
						<div className="w-full flex justify-between">
							<p className='font-bold'>Hourly Rate</p>
							<p>100 USDC</p>
						</div>
						<div className="w-full flex justify-between">
							<p className='font-bold'>Daily Rate</p>
							<p>100 USDC</p>
						</div>
						<div className="w-full flex justify-between">
							<p className='font-bold'>Collateral</p>
							<p>100 USDC</p>
						</div>
					</div>
					<div className="w-full h-24 flex justify-center items-center space-x-5">
						<input type="text" className="w-2/3 h-1/2 p-2 border border-gray-800" placeholder="Time for which nft borrowed" />
						<div className="w-1/3 h-full">
							<p className="text-normal">Total</p>
							<p className="w-full h-1/2 bg-gray-400 border border-gray-800 p-2">Total</p>
							<p className="text-sm text-gray-400">Collateral + Rent</p>
						</div>
					</div>
					<div className="w-full p-3 bg-black text-white rounded-xl flex justify-center items-center text-xl">Borrow NFT</div>
				</div>
			</div>
		</div>
	)
}