import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function Navbar() {
	const [showNav, setShowNav] = useState(false);
	const router = useRouter();

	return (
		<nav className='fixed z-10 bg-white w-full h-20 px-5 flex justify-between items-center border-b-slate-700 shadow-lg font-semibold text-slate-700'>
			<p className='text-xl'>Coding Chronicles</p>
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
					<li>Blog Posts</li>
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
			<div className='md:hidden'>
				<span className='material-symbols-outlined'>menu</span>
			</div>
		</nav>
	);
}
export default Navbar;
