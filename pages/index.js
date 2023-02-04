import Head from 'next/head';
import Image from 'next/image';
import explosion from '/public/hero_nuclear_blast.jpeg';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Code Chronicles | A New Dev&apos;s Journey</title>
				<meta
					name='description'
					content='a new developer documenting and sharing his experiences'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='relative top-20 flex flex-col justify-center items-center'>
				<section>
					<figure className='flex flex-col items-center text-sm'>
						<Image src={explosion} alt='nuclear bomb explosion' width={900} />
						<figcaption className='mt-2 text-center italic'>
							&quot;This is your brain after you finally understand a concept
							you&apos;ve been struggling with...&quot; ~ Me
						</figcaption>
					</figure>
				</section>

				<div className='h-[2px] w-3/4 my-10 mx-auto bg-slate-800'></div>

				<article className='w-full max-w-[1500px] flex justify-center '>
					<div className='w-3/4'>
						<p>
							<span className='text-lg font-bold'>This is how it felt</span>{' '}
							when things finally clicked and I was able to wrap my head around
							full-stack development a few months ago.
						</p>
						<p>
							Like most people who try to learn web development, my goal was to
							learn how to build entire applications from the ground-up and
							eventually create a business as a software engineer or work for
							another company as one. I also had visions of actually having a
							hand in some digital product that could benefit thousands or
							millions of people. Then - like most people again - I got
							overwhelmed pretty easily once I got a better understanding of how
							much truly goes into making a good website or app, and as a result
							I ended up making A LOT of mistakes that either slowed or derailed
							my progress. Ultimately, my lack of progress (and interviews)
							influenced me to pivot and pursue older aspirations and paths that
							I thought were &quot;easier&quot; than programming. So that last
							sentence was just a nice way of saying{' '}
							<strong>&quot;I gave up&quot;</strong>.
						</p>
						<p>
							Despite quitting, I still had programming in the back of my mind
							the entire time I was going through my short-lived identity
							crisis. I still followed web dev news as well as some of the
							content creators I became familiar with and would just wish I was
							good enough to understand or apply some of the concepts they would
							talk about. It frustrated me that I didn&apos;t know, and that
							frustration turned to anger. I was also angry because I
							&quot;failed&quot; at something else I wanted to do, and that
							failure was preventing me from acquiring a lot of what I wanted in
							my future. Finally, my anger turned into a determination to{' '}
							<strong>truly</strong> apply myself and push through all of those
							self-imposed barriers that held me back; I accepted and embraced
							the fact that what I&apos;m trying to achieve is HARD, and that
							difficulty is part of what makes this path as rewarding as it is.
						</p>
						<p>
							That simple - but powerful - mindset change turned someone who was
							literally <i>terrified</i> of getting a bug they couldn&apos;t
							understand into someone who gets excited about the opportunity to
							learn and solve more complex problems!
						</p>
						<p className='mb-0'>
							This mindset is also what inspired me to create this blog, and
							that&apos;s because I want to help someone people who might be
							experiencing what I went through. This blog will contain:
						</p>
						<ul className='list-disc ml-8 mb-4'>
							<li>personal stories related to coding</li>
							<li>
								coding-related concepts & topics that I find interesting or
								helpful
							</li>
							<li>short tutorials/instructions</li>
						</ul>
						<p>
							With that being said, <strong>my name is Sean</strong>. Thanks for
							reading, and I hope the content I provide can inspire, motivate,
							entertain and help you on your journey as I take mine.
						</p>
					</div>
				</article>

				<div className='h-[2px] w-3/4 my-10 mx-auto bg-slate-800'></div>
			</main>
		</div>
	);
}
