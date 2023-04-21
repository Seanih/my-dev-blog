/* eslint-disable react/jsx-no-target-blank */
import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const { data: session } = useSession();
	const formRef = useRef();

	const handleClearForm = () => {
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	};

	const handleSendMessage = async e => {
		e.preventDefault();

		try {
			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				formRef.current,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			);

			handleClearForm();
			alert('Message sent successfully!');
		} catch (error) {
			alert('An error occured. Please try again.');
		}
	};

	useEffect(() => {
		if (session) {
			setName(session.user.name);
			setEmail(session.user.email);
		}
	}, [session]);

	return (
		<div className='relative top-20'>
			<Head>
				<title>Code Chronicles | Contact</title>
				<meta
					name='description'
					content='a new developer documenting and sharing his experiences'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex flex-col items-center justify-center'>
				<div className='flex flex-col items-center w-full'>
					<h3 className='mt-4 group-hover:text-sky-700'>My Socials</h3>
					<div className='flex justify-between w-3/5 max-w-lg px-8 py-4 duration-200 ease-in rounded-lg shadow-lg item-center sm:w-1/2 hover:scale-105'>
						<a
							className='rounded-full hover:bg-slate-300'
							href='https://www.linkedin.com/in/sean-anih-86a425268/'
							target='_blank'
						>
							<div className='p-3 duration-100 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
								<FaLinkedinIn />
							</div>
						</a>
						<a
							className='rounded-full hover:bg-slate-300'
							href='https://twitter.com/fullstack_sean'
							target='_blank'
						>
							<div className='p-3 duration-100 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
								<FaTwitter />
							</div>
						</a>
						<a
							className='rounded-full hover:bg-slate-300'
							href='https://github.com/Seanih'
							target='_blank'
						>
							<div className='p-3 duration-100 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
								<FaGithub />
							</div>
						</a>
					</div>
				</div>

				<form
					className='flex flex-col w-4/5 max-w-3xl mt-8 sm:w-3/4'
					ref={formRef}
					onSubmit={handleSendMessage}
				>
					<h3 className='mt-4 text-center'>Send Me A Message</h3>
					<div className='mb-4'>
						<label className='block mb-1' htmlFor='user_name'>
							Name:{' '}
						</label>
						<input
							className='w-full p-2 rounded-lg shadow-xl'
							type='text'
							id='user_name'
							name='user_name'
							value={name}
							placeholder='e.g., Michael Jackson'
							onChange={e => setName(e.target.value)}
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block mb-1' htmlFor='user_email'>
							Email:{' '}
						</label>
						<input
							className='w-full p-2 rounded-lg shadow-xl'
							type='email'
							id='user_email'
							name='user_email'
							value={email}
							placeholder='person@gmail.com'
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block mb-1' htmlFor='user_subject'>
							Subject:{' '}
						</label>
						<input
							className='w-full p-2 rounded-lg shadow-xl'
							type='text'
							id='user_subject'
							name='user_subject'
							value={subject}
							placeholder='Greetings'
							onChange={e => setSubject(e.target.value)}
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block mb-1' htmlFor='user_message'>
							Message:{' '}
						</label>
						<textarea
							className='w-full p-2 rounded-lg shadow-xl'
							id='user_message'
							name='user_message'
							value={message}
							cols={60}
							rows={5}
							onChange={e => setMessage(e.target.value)}
							required
						/>
					</div>
					<button
						className='py-4 mt-4 duration-100 border border-black rounded-lg hover:bg-green-600 hover:text-white'
						type='submit'
					>
						Send Message
					</button>
					<button
						className='py-4 mt-4 duration-100 bg-red-300 border border-black rounded-lg hover:bg-red-500 hover:text-white'
						type='reset'
						onClick={handleClearForm}
					>
						Clear Form
					</button>
				</form>
			</main>
		</div>
	);
}
export default Contact;
