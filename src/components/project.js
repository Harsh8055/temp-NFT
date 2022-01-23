import Button from './button'
import { Link } from 'react-router-dom';

const Project = ({ title, hourlyRate, dailyRate, minimumCollateral }) => {
	
	
	return (
		
		<div className="w-72 h-96 bg-white text-black flex flex-col rounded-2xl">
			<div className="relative w-72 h-1/2 rounded-2xl">
				<img src="https://images.unsplash.com/photo-1642146389720-2561f65902c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80" alt="" className="rounded-2xl w-full h-full" />
			</div>
			<div className="w-full h-1/2 flex flex-col justify-start items-start px-6 py-2 space-y-5">
				<h1 className='text-xl font-bold'>{title}</h1>
				
				<div className='w-full flex flex-col justify-center items-center'>
					<div className="w-full flex justify-between">
						<p className='font-bold'>Hourly Rate</p>
						<p>{Number(hourlyRate)} MATIC</p>
					</div>
					<div className="w-full flex justify-between">
						<p className='font-bold'>Daily Rate</p>
						<p>{Number(dailyRate)} MATIC</p>
					</div>
					<div className="w-full flex justify-between">
						<p className='font-bold'>Collateral</p>
						<p>{Number(minimumCollateral)} MATIC</p>
					</div>
				</div>
				
				<button className='w-full text-white rounded-md h-10 bg-black'>Borrow NFT</button>
			</div>
		</div>
		
	)
}

export default Project;