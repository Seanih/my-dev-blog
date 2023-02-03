/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleNav = () => setNav(!nav);

	return (
		<div className='fixed w-full bg-[#ecf0f3] h-20 shadow-xl z-[100]'>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Image
					src='/../public/assets/navLogo.png'
					alt='logo'
					width='100'
					height='50'
				/>

				<div>
					<ul className='hidden sm:flex'>
						<Link href={'/'}>
							<li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href={'/'}>
							<li className='ml-10 text-sm uppercase hover:border-b'>About</li>
						</Link>
						<Link href={'/'}>
							<li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
						</Link>
						<Link href={'/'}>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Projects
							</li>
						</Link>
						<Link href={'/'}>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className='sm:hidden cursor-pointer'>
						<AiOutlineMenu size={35} />
					</div>
				</div>
			</div>

			{/* -------- side menu -------- */}
			<div className={nav ? 'sm:hidden w-full h-screen bg-black/70' : ''}>
				<div
					className={
						nav
							? 'sm:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
					}
				>
					<div>
						<div className='flex justify-between w-full items-center'>
							<Image
								src='/../public/assets/navLogo.png'
								width={87}
								height={35}
								alt=''
							/>
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-4'>
								Let's build something great together
							</p>
						</div>
					</div>
					<div className='py-4'>
						<ul className='uppercase'>
							<Link href='/'>
								<li className='py-4 text-sm'>Home</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>About</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Skill</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Projects</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Contact</li>
							</Link>
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-[#5651e5]'>
								Let's Connect
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
			</div>
		</div>
	);
}
export default Navbar;
