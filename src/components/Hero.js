import Button from "./button"

export default function Hero() {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-1/2 h-full flex flex-col justify-center items-start px-16 space-y-5">
				<h1 className="font-bold text-6xl">Discover, Borrow, and  Rent extraordinary NFTs</h1>
				<p className="font-semibold text-xl">Borrow and Rent NFTs you love⚡</p>
				<div className="flex space-x-5">
					<Button gradient={true}>Rent NFT</Button>
					<Button gradient={false}>Borrow NFT</Button>
				</div>
			</div>
			<div className="w-1/2 h-full"></div>
		</div>
	)
}