import Head from 'next/head';
import Image from 'next/image';
import explosion from '/public/hero_nuclear_blast.jpeg';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Coding Chronicles</title>
				<meta
					name='description'
					content='a new developer documenting and sharing his experiences'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='relative top-20'>
				<figure className='flex flex-col items-center text-sm'>
					<Image width={800} src={explosion} alt='nuclear bomb explosion' />
					<figcaption className='text-center italic'>
						&quot;The mind after understanding what previously seemed impossible&quot; ~ Me
					</figcaption>
				</figure>
			</main>
		</div>
	);
}
