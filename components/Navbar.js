import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';

import logo from '/public/blue-logo.png';

function Navbar() {
	const [showNav, setShowNav] = useState(false);
	const router = useRouter();

	const toggleNav = () => setShowNav(!showNav);

	return (
		<nav className='fixed z-[100] max-w-[1500px]  bg-white/90 w-full h-20'>
			<div className='flex h-full px-5 justify-between items-center border-b-slate-700 shadow-lg font-semibold text-slate-700'>
				<div className='flex items-center'>
					<Image
						className='bg-slate-200 rounded-lg'
						src={logo}
						alt='sean logo'
						width={75}
					/>
					<>Code Chronicles</>
				</div>
				{/* full size Navbar */}
				<ul className='hidden md:flex'>
					<Link
						className={`link text-lg ${
							router.pathname === '/' && 'underline underline-offset-4'
						}`}
						href={'/'}
					>
						<li>Home</li>
					</Link>
					<Link
						className={`link text-lg ml-5 ${
							router.pathname === '/posts' && 'underline underline-offset-4'
						}`}
						href={'/posts'}
					>
						<li>Posts</li>
					</Link>
					<Link
						className={`link text-lg ml-5 ${
							router.pathname === '/contact' && 'underline underline-offset-4'
						}`}
						href={'/contact'}
					>
						<li>Contact</li>
					</Link>
					<Link
						className={`link text-lg ml-5 ${
							router.pathname === '/about' && 'underline underline-offset-4'
						}`}
						href={'/about'}
					>
						<li>About</li>
					</Link>
				</ul>
				{/* HAMBURGER ICON */}
				<button
					className='md:hidden hover:cursor-pointer flex'
					type='button'
					onClick={toggleNav}
				>
					<AiOutlineMenu size={35} />
				</button>
			</div>

			{/* --------> MOBILE NAVBAR <-------- */}
			<div
				className={
					showNav
						? 'md:hidden w-full h-screen bg-black/70 ease-in duration-300'
						: ''
				}
			>
				<div
					className={
						showNav
							? 'md:hidden fixed left-0 top-0 w-[55%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-300'
							: 'md:hidden fixed left-[-100%] top-0 w-[65%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-300'
					}
				>
					<div className='flex items-center'>
						<Image
							className='bg-slate-400 rounded-lg mr-4'
							src={logo}
							alt='sean logo'
							width={75}
						/>
						<>Code Chronicles</>
					</div>
					<ul className='pt-28 h-1/2 flex flex-col justify-between'>
						<li>
							<Link
								className={`link text-lg hover:scale-100 hover:text-xl hover:font-bold ${
									router.pathname === '/' && 'underline underline-offset-4'
								}`}
								href={'/'}
								onClick={toggleNav}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className={`link text-lg hover:scale-100 hover:text-xl hover:font-bold ${
									router.pathname === '/posts' && 'underline underline-offset-4'
								}`}
								href={'/posts'}
								onClick={toggleNav}
							>
								Posts
							</Link>
						</li>
						<li>
							<Link
								className={`link text-lg hover:scale-100 hover:text-xl hover:font-bold ${
									router.pathname === '/contact' &&
									'underline underline-offset-4'
								}`}
								href={'/contact'}
								onClick={toggleNav}
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								className={`link text-lg hover:scale-100 hover:text-xl hover:font-bold ${
									router.pathname === '/about' && 'underline underline-offset-4'
								}`}
								href={'/about'}
								onClick={toggleNav}
							>
								About
							</Link>
						</li>
					</ul>
					<div className='pt-40'>
						<p className='uppercase tracking-widest text-[#5651e5]'>
							Let&apos;s Connect
						</p>
						<div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
							<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
								<FaLinkedinIn />
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
								<FaGithub />
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
								<AiOutlineMail />
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
								<BsPersonLinesFill />
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
