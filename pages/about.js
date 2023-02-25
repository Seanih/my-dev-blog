/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';

function About() {
	return (
		<div className='relative top-20'>
			<Head>
				<title>Code Chronicles | About</title>
				<meta
					name='description'
					content='a new developer documenting and sharing his experiences'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='flex flex-col justify-center items-center max-w-[1200px] m-auto pt-8'>
				<div className='w-3/4'>
					<h1 className='text-center mb-8'>About Me</h1>
					<p style={{ fontSize: '0.9rem' }}>
						<i>
							If you made it here, I can assume you've seen at least one of my
							posts, so I want to start by thanking you for stopping by and
							reading what I have to say.
						</i>
					</p>
					<p>
						Hey! My name is Sean, and I'm excited to say that I'm a full-stack{' '}
						<span className='italic font-bold'>and </span>
						blockchain developer. My professional background includes time in
						customer service, working in the mortgage industry, as well as 12
						years of audio engineering (including a little audio production).
					</p>
					<h3 className='text-center mb-4'>My History With Code</h3>
					<p>
						My interest in programming started summer of 2019, and it all
						stemmed from researching more valuable skills I could learn that
						involved working with computers. Growing up and throughout my
						adulthood I was used to either playing or working with a variety of
						tech on a daily basis, so it felt like a natural and logical
						next-step to learn how to create software myself. I spent about a
						week trying to figure out what route I wanted to take to learn
						programming and ultimately decided to attend an online bootcamp.
					</p>
					<p className='mb-0'>
						I ended up quitting the program during the second month for 2
						reasons:{' '}
					</p>

					<ul className='ml-4'>
						<li>1) the cost greatly exceeded the value provided</li>
						<li>2) I wasn't learning fast enough to justify the payments</li>
					</ul>
					<p>
						Even though I withdrew, the things I was exposed to were enough to
						let me know that programming was a career I wanted to pursue. I
						found that a lot of the resources I used to help understand some of
						the bootcamp material were better, free or at least significantly
						cheaper than what the bootcamp had to offer, so I started my
						self-taught journey at that point.
					</p>
					<p></p>
				</div>
			</main>
		</div>
	);
}
export default About;
