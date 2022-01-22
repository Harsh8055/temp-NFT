import { useState } from "react";
import Project from "./project";

export default function Projects() {
	const [projects, setProjects] = useState([1])

	return (
		<div className="w-full h-full flex justify-center items-center flex-col bg-black p-10 text-white space-y-10">
			<div className="flex justify-center items-center flex-col">
				<p className="text-xl font-semibold">Borrow latest artwork with most valued bids</p>
				<h1 className="text-8xl font-bold">Trending NFTs</h1>
			</div>
			<div className="w-full h-full grid grid-cols-5 gap-4">
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