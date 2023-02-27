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
			<main className='flex flex-col justify-center items-center max-w-[1200px] m-auto'>
				<div className='w-3/4'>
					<h1 className='text-center my-8'>About Me</h1>
					<section id='introduction'>
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
					</section>
					<section id='code_history'>
						<h3 className='text-center mb-4'>My History With Code</h3>
						<p>
							My interest in programming started summer of 2019, and it all
							stemmed from researching more valuable skills I could learn that
							involved working with computers. I played or worked with a variety
							of tech my entire life, so it felt like a natural next-step to
							learn how to create software myself. I spent about a week trying
							to figure out what route I wanted to take to learn programming and
							ultimately decided to attend an online bootcamp.
						</p>
						<p>
							During the first 2 months, I struggled a lot more than I expected
							to trying to grasp the basics of HTML, CSS and Javascript, so I
							started to use outside resources to supplement my learning. In
							doing so, I noticed that a lot of them were more helpful,
							significantly cheaper, or even free compared to what the bootcamp
							was offering, so I left the program to save thousands of dollars
							and started to learn programming on my own.
						</p>
						<p>
							Shortly after getting comfortable with HTML/CSS and having a loose
							understanding of Javascript basics, I paused my education so I
							could work and save as much as possible since my family was
							prepping to move across the country and my wife was pregnant.
							After we moved and settled down, I was able to really focus on
							code starting July of 2020 - January 2021. I spent a few weeks
							refamiliarizing myself with the basics because of my break, but
							once I became comfortable again I moved on to learning React. I
							really fell in love with JSX and how much faster React was at
							building UIs compared to vanilla JS, so I invested time in a few
							courses, built some portfolio projects and started applying to
							jobs in Feb 2021.
						</p>
					</section>
					<section id='failures'>
						<h3 className='text-center mb-4'>My Failures</h3>
						<p>
							I got nothing but rejections and silence the few months I was
							applying, and the closest I got to anything meaningful was an
							interview with a small company that sold software; it was a
							product support specialist position that was basically a customer
							service/sales position with the occasional use of JQuery to
							customize something for a customer. I tried pretending I wanted
							the job just so I could add "professional" JQuery experience to my
							resume, but it was obvious to the CFO that I really just wanted to
							program so he rightfully didn't hire me.
						</p>
						<p>
							I rushed to try and find a way to distinguish myself from other
							candidates, so I studied and got a certificate in project
							management because I saw a good amount of programming jobs
							mentioning Agile and Scrum experience. I liked what I learned
							about the career and figured it would be easier to break into
							because of my background, so I applied to a few jobs and actually
							got one as a project manager for a real estate company.
							Unfortunately, my experience with them wasn't anything like I was
							expecting, so in light of what had been happening to me I decided
							to go back to audio engineering.
						</p>
						<p>
							It felt good for a while doing what I was familiar with, and at
							times it made me regret trying to do anything else in the first
							place. But it didn't take long for me to start resenting myself,
							and it's because I really just wanted to be a programmer but felt
							like I would never be good enough. I forgot to say earlier that I
							had short stints learning other technologies like MySQL, Python,
							and C#, but every time I ran into a bug or installation issue I
							couldn't understand I would just get overwhelmed and pivot; that
							negative cycle only made me feel worse and I didn't even realize I
							was trapping myself in it. Then it started to affect my drive as
							an audio engineer, and for a short time I had no idea what I was
							going to do and felt miserable. So after spending some time really
							assessing my situation, I decided that if I was going to be
							miserable, I might as well feel it going after what I{' '}
							<strong>
								<i>really</i>
							</strong>{' '}
							want in life instead of feeling miserable because I{' '}
							<strong>wasn't trying at all</strong>.
						</p>
					</section>
					<section id='turning_point'>
						<h3 className='text-center mb-4'>My Turning Point</h3>
						<p>
							In June of 2022, I swore to myself that I would learn blockchain
							development. I was exposed to the technology when I started
							dabbling in crypto currencies towards the end of 2021, and despite
							what was happening to the crypto markets I could still see the
							opportunities in the underlying technology. It seemed so advanced
							and I had no idea how something like that could work, so I figured
							that would be the best place to start. I did some research, found
							some courses from a few good sources and started learning how the
							blockchain and smart contracts work.
						</p>
						<p>
							My main resource was a more expensive but really effective course
							that didn't have a Q&A section, and I chose it because I needed to
							experience being forced to find my own solutions. I was scared at
							first, but it turned out being the best decision because I slowly
							learned that I was able to actually solve problems myself; my
							favorites took seconds or minutes to solve, others took hours or
							even longer, but with enough effort and patience I was able to
							solve every single issue I ran into. I started learning faster
							because my confidence was growing, and in turn I learned how to
							solve bigger and more complex problems.
						</p>
						<p>
							Once I became comfortable with the fundamentals of full-stack
							blockchain development, I knew I would be able learn off-chain
							full-stack as well. I started by learning how to interact with
							NoSQL databases, and once I understood that I moved on to SQL
							databases, so now I feel comfortable working with both. I have a
							significantly better understanding of programming and how data
							flows through an application, and my foundation is solid enough
							for me to expand and - given enough time - be able to build any
							application I would need to. <strong>I love programming</strong>,
							I love how{' '}
							<strong>it made me grow and change for the better</strong>, and
							I'm ready to capitalize on all of the opportunities it will bring.
						</p>
						<div className='h-[2px] w-3/4 my-10 mx-auto bg-slate-800'></div>
					</section>
				</div>
			</main>
		</div>
	);
}
export default About;
