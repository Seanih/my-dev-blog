import { getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false,
			},
		};
	}

	return {
		props: {
			user: session.user,
		},
	};
}

function SignOut({ user }) {
	const router = useRouter();

	return (
		<div className='relative top-20'>
			<div
				className={`h-[calc(100vh-80px)] max-w-[1200px] m-auto flex flex-col items-center justify-center`}
			>
				<div className='border border-black rounded-xl p-16 flex flex-col justify-center items-center bg-slate-600 text-white'>
					<p>
						Thanks for stopping by, {user.name.split(' ')[0]}! See you next
						time.
					</p>
					<button
						className='border border-white rounded-lg w-[10rem] mb-4 p-4 hover:bg-slate-300 hover:text-black'
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
export default SignOut;
