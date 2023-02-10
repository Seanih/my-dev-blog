import Link from 'next/link';

function Admin() {
	return (
		<div className='relative top-20'>
			<div
				className={`h-[calc(100vh-80px)] max-w-[1200px] m-auto flex flex-col items-center justify-center`}
			>
				<div className='border border-black rounded-xl h-1/2 w-1/2 flex flex-col justify-center items-center bg-slate-600'>
					<p className='text-white'>What would you like to do?</p>
					<Link href={'/admin/create-post'}>
						<button className='border border-white rounded-lg w-[10rem] mb-4 p-4 hover:bg-slate-300 hover:text-black text-white'>
							Create Post
						</button>
					</Link>
					<Link href={'/admin/edit-post'}>
						<button className='border border-white rounded-lg w-[10rem] p-4 hover:bg-slate-300 hover:text-black text-white'>
							Edit Post
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Admin;
