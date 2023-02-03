import Head from 'next/head';
import Image from 'next/image';
import explosion from '/public/hero_nuclear_blast.jpeg';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Coding Chronicles | A New Dev&apos;s Journey</title>
				<meta
					name='description'
					content='a new developer documenting and sharing his experiences'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='relative top-20'>
				<section>
					<figure className='flex flex-col items-center text-sm'>
						<Image width={800} src={explosion} alt='nuclear bomb explosion' />
						<figcaption className='mt-2 text-center italic'>
							&quot;This is your brain after you finally understand a concept you&apos;ve been struggling with...&quot; ~ Me
						</figcaption>
					</figure>
				</section>
				<div className='h-[2px] w-3/4 my-10 mx-auto bg-slate-800'></div>
				<article>
					<p className='text-center'>
						<span className='text-lg font-bold'>This is how it felt</span> when
						everything finally clicked and I was able to wrap my head around
						full-stack development.
					</p>
				</article>
			</main>
		</div>
	);
}
