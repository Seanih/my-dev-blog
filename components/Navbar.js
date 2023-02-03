import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar({ logo }) {
	const [showNav, setShowNav] = useState(true);
	const router = useRouter();

	const toggleNav = () => console.log('clicked');

	return (
		<nav className='fixed z-[100] bg-white w-full h-20 px-5 flex justify-between items-center border-b-slate-700 shadow-lg font-semibold text-slate-700'>
			<div className='flex items-center'>
				<Image
					className='bg-slate-200 rounded-lg'
					src={logo}
					alt='sean logo'
					width={75}
				/>
				<p>Coding Chronicles</p>
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
						router.pathname === '/all_posts' && 'underline underline-offset-4'
					}`}
					href={'/all_posts'}
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

			{/* mobile Navbar */}
			<div className='md:hidden hover:cursor-pointer'>
				<button type='button' onClick={toggleNav}>
					<AiOutlineMenu size={35} />
				</button>
			</div>
		</nav>
	);
}
export default Navbar;
