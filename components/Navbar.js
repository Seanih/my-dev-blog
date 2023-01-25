import Link from 'next/link';

function Navbar() {
	return (
		<nav className='fixed z-10 bg-white w-full h-20 px-5 flex justify-between items-center border-b-slate-700 shadow-lg font-semibold text-slate-700'>
			<p className='text-lg'>Coding Chronicles</p>
			<ul className='flex'>
				<Link className='link text-lg' href={'/'}>
					<li>Home</li>
				</Link>
				<Link className='link text-lg ml-5' href={'/all_posts'}>
					<li>Blog Posts</li>
				</Link>
				<Link className='link text-lg ml-5' href={'/contact'}>
					<li>Contact</li>
				</Link>
				<Link className='link text-lg ml-5' href={'/about'}>
					<li>About</li>
				</Link>
			</ul>
		</nav>
	);
}
export default Navbar;
