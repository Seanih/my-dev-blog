import { useSession, signIn, signOut } from 'next-auth/react';

export default function CamperVanPage() {
	const { data: session, status } = useSession();
	const userEmail = session?.user.email;

	console.log(session);
	if (status === 'loading') {
		return <p>Hang on there...</p>;
	}

	if (status === 'authenticated') {
		return (
			<div className='relative top-20'>
				<p>Signed in as {userEmail}</p>
				<button onClick={() => signOut()}>Sign out</button>
				<img src='https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png' />
			</div>
		);
	}

	
	return (
		<div className='relative top-20'>
			<p>Not signed in.</p>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	);
}
