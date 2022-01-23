import Navbar from "./Navbar"
import Projects from "./projects"
import Project from "./project"

export default function Explore() {
	return (
		<div className="w-full min-h-screen text-black bg-gray-200">
			<Navbar></Navbar>
			<div className="w-full h-36  flex flex-col md:flex-row justify-center items-center">
				<div className="w-1/2 h-full flex justify-start items-center px-16">
					<h1 className="font-bold text-4xl">Explore all Projects</h1>
				</div>
				<div className="font-poppins font-light w-1/2 h-full flex justify-end items-center px-16">
					<div className="relative bg-transparent w-8/12 h-10">
						<input type="text" placeholder="Project Name, Category and Ids" className="w-full h-full rounded-md text-lg p-3 border border-black text-black" />
						<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1 right-2 h-8 w-8 " viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
						</svg>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-start items-center w-full h-20 space-x-5 px-16 ">
				<div className="w-40 h-10 rounded-md flex justify-center items-center space-x-1 border border-black">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
					</svg>
					<h2>Price</h2>
				</div>
				<div className="w-48 h-10 rounded-md flex justify-center items-center space-x-1 border border-black">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
					</svg>
					<h2>Recently Added</h2>
				</div>
			</div>
			{/* <Projects></Projects> */}
			<div className="w-full h-full grid grid-cols-5 gap-4 px-16">
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
				<Project title="Project Name" verified={true} raised="1200"></Project>
			</div>
		</div>
	)
}