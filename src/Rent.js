import Navbar from "./components/Navbar"
import Projects from "./components/projects"
// import Project from "./components/project"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useState } from 'react'

function Project({ isOpen, setIsOpen }) {
	return (
		<div className="w-72 h-96 bg-white text-black flex flex-col rounded-2xl">
			<div className="relative w-72 h-3/4 rounded-2xl">
				<img src="https://images.unsplash.com/photo-1642146389720-2561f65902c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80" alt="" className="rounded-2xl w-full h-full" />
			</div>
			<div className="w-full h-1/4 flex px-3 flex flex-col pt-2 space-y-3">
				<div className="flex justify-between">
					<h1 className="text-xl font-bold">NFT Name</h1>
					<h1 className="text-xl font-semibold">Price</h1>
				</div>
				<button onClick={() => setIsOpen(true)} className='w-full text-white rounded-md h-10 bg-black'>Borrow NFT</button>
			</div>
		</div>
	)
}

function Modal({ id, isOpen, setIsOpen, children }) {
	
	function closeModal() {
		setIsOpen(false)
	}
	
	function openModal() {
		setIsOpen(true)
	}
	
	return (
	  <>
  
		<Transition appear show={isOpen} as={Fragment}>
		  <Dialog
			as="div"
			className="fixed inset-0 z-10 overflow-y-auto"
			onClose={closeModal}
		  >
			<div className="min-h-screen px-4 text-center">
			  <Transition.Child
				as={Fragment}
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				>
				<Dialog.Overlay className="fixed inset-0" />
			  </Transition.Child>
  
			  {/* This element is to trick the browser into centering the modal contents. */}
			  <span
				className="inline-block h-screen align-middle"
				aria-hidden="true"
				>
				&#8203;
			  </span>
			  <Transition.Child
				as={Fragment}
				enter="ease-out duration-300"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
				>
				<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
					<Dialog.Title
					as="h3"
					className="text-lg font-medium leading-6 text-gray-900"
					>
					Name of NFT #{id}
				  </Dialog.Title>
				  <div className="mt-2">
					<p className="text-sm text-gray-500">
					  {children}
					</p>
				  </div>
				</div>
			  </Transition.Child>
			</div>
		  </Dialog>
		</Transition>
	  </>
	)
}

export default function Rent() {
	const [componentToLoad, setComponentToLoad] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (isTrue) => {
		console.log(isTrue);
		if (isTrue === componentToLoad) {
			setComponentToLoad(isTrue);
		} else {
			setComponentToLoad(!componentToLoad);
		}
	};

	return (
		<div className="w-full min-h-screen text-black bg-gray-200">
			<Navbar></Navbar>
			<div className="flex justify-between w-full px-16 mt-10 mb-10">
				{componentToLoad && 
					<h1 className="text-3xl font-bold">My NFT's</h1>
				}
				{!componentToLoad && 
					<h1 className="text-3xl font-bold">Rented NFT's</h1>
				}
				{componentToLoad && 
					<div className="bg-gray-100 text-black px-1 py-1 rounded-xl flex items-center">
						<button
							className="bg-gray-900 py-2 rounded-xl text-white px-3 cursor-pointer"
							onClick={() => handleClick(true)}>
							My NFT's
						</button>
						<button
							className="px-2 cursor-pointer"
							onClick={() => handleClick(false)}>
							Rented NFT's
						</button>
					</div>
				}
				{!componentToLoad && 
					<div className="bg-gray-100 text-black px-1 py-1 rounded-xl flex items-center">
						<button
							className="px-2 cursor-pointer"
							onClick={() => handleClick(true)}>
							My NFT's
						</button>
						<button
							className="bg-gray-900 py-2 rounded-xl text-white px-3 cursor-pointer"
							onClick={() => handleClick(false)}>
							Rented NFT's
						</button>
					</div>
				}
			</div>
			{componentToLoad && 
				// My NFT's
				<div className="w-full h-full grid grid-cols-5 gap-4 px-16">
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
				</div>
			}

			{!componentToLoad && 
				// Rented Out NFT's
				<div className="w-full h-full grid grid-cols-5 gap-4 px-16">
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
					<Project title="Project Name" verified={true} raised="1200" isOpen={isOpen} setIsOpen={setIsOpen}></Project>
				</div>
			}

			<Modal id={12} isOpen={isOpen} setIsOpen={setIsOpen}>
				<div className="w-full h-1/3 flex flex-col justify-start items-center">
					<div className="w-full h-full flex justify-start items-center space-x-5">
						<img className="w-1/2 h-1/2 rounded-md" src='https://images.unsplash.com/photo-1642146389720-2561f65902c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80' alt="" />
						<div className="flex flex-col">
							<h1 className="text-2xl font-bold text-black">Name of NFT</h1>
							<p className="text-lg font-semibold text-gray-500">Collection Name</p>
						</div>
					</div>
				</div>
					<form class="rounded mt-5">
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="title">
								Hourly Rates
							</label>
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
						</div>
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="description">
								Daily Rates
							</label>
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description" />
						</div>
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="fundamount">
								Collateral
							</label>
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fundamount" type="number" placeholder="Fund Amount" />
						</div>
						<div class="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2" for="time">
								Max time duration for borrow (In hours)
							</label>
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="time" type="number" placeholder="Raise Until" />
						</div>
						<div class="flex items-center justify-center mt-5">
							<button onClick={() => {setIsOpen(false) }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
								Rent NFT
							</button>
						</div>
					</form>
			</Modal>	
		</div>
	)
}