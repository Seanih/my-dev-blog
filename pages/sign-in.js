import { getSession, useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function SignIn() {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session?.user) {
			if (session?.user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
				router.push('/admin');
			} else {
				router.push('/posts');
			}
		}
	}, [router, session?.user]);

	return (
		<div className='relative top-20'>
			<div
				className={`h-[calc(100vh-80px)] max-w-[1200px] m-auto flex flex-col items-center justify-center`}
			>
				<div className='border border-black rounded-xl p-16 flex flex-col justify-center items-center bg-slate-600 text-white'>
					<p>Please sign in</p>
					<button
						className='border border-white rounded-lg w-[10rem] mb-4 p-4 hover:bg-slate-300 hover:text-black'
						type='button'
						onClick={signIn}
					>
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}
export default SignIn;
