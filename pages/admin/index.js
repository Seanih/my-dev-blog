import Link from 'next/link';
import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

export async function getServerSideProps(context) {
	const session = await getSession(context);

	if (session?.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false,
			},
		};
	}

	return {
		props: { user: session.user },
	};
}

function Admin({ user }) {
	const userFirstName = user.name.split(' ')[0];

	return (
		<div className='relative top-20'>
			<div
				className={`h-[calc(100vh-80px)] max-w-[1200px] m-auto flex flex-col items-center justify-center`}
			>
				<div className='border border-black rounded-xl h-1/2 w-1/2 flex flex-col justify-center items-center bg-slate-600 text-white'>
					<p>What would you like to do, {userFirstName}?</p>
					<Link href={'/admin/create-post'}>
						<button className='border border-white rounded-lg w-[10rem] mb-4 p-4 hover:bg-slate-300 hover:text-black'>
							Create Post
						</button>
					</Link>
					<Link href={'/admin/edit-post'}>
						<button className='border border-white rounded-lg w-[10rem] mb-4 p-4 hover:bg-slate-300 hover:text-black'>
							Edit Post
						</button>
					</Link>
					<button
						className='border border-white rounded-lg w-[10rem] p-4 bg-red-500 hover:bg-red-400 hover:text-black'
						type='button'
						onClick={signOut}
					>
						Sign Out
					</button>
				</div>
			</div>
		</div>
	);
}
export default Admin;
