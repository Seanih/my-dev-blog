/* eslint-disable react/jsx-no-target-blank */
import Head from 'next/head';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const formRef = useRef();

	const handleNameChange = e => {
		setName(e.target.value);
	};
	const handleEmailChange = e => {
		setEmail(e.target.value);
	};
	const handleSubjectChange = e => {
		setSubject(e.target.value);
	};
	const handleMessageChange = e => {
		setMessage(e.target.value);
	};

	const handleClearForm = () => {
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	};

	const handleSendMessage = async e => {
		e.preventDefault();

		try {
			let result = await emailjs.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				formRef.current,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			);

			console.log(result?.text);

			handleClearForm();
			alert('Message sent successfully!');
		} catch (error) {
			console.error(error);
		}
	};

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

			<main className='flex flex-col justify-center items-center'>
				<div className='w-full flex flex-col items-center'>
					<h3 className='my-4 group-hover:text-sky-700'>My Socials</h3>
					<div className='flex item-center justify-between w-3/5 sm:w-1/2 max-w-lg py-4 px-8 rounded-lg shadow-lg hover:scale-105 ease-in duration-200'>
						<a
							className='hover:bg-slate-300 rounded-full'
							href='https://www.linkedin.com/in/sean-anih-86a425268/'
							target='_blank'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
								<FaLinkedinIn />
							</div>
						</a>
						<a
							className='hover:bg-slate-300 rounded-full'
							href='https://twitter.com/fullstack_sean'
							target='_blank'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
								<FaTwitter />
							</div>
						</a>
						<a
							className='hover:bg-slate-300 rounded-full'
							href='https://github.com/Seanih'
							target='_blank'
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
								<FaGithub />
							</div>
						</a>
					</div>
				</div>

				<form
					className='flex flex-col mt-8 w-4/5 sm:w-3/4 max-w-3xl'
					ref={formRef}
					onSubmit={handleSendMessage}
				>
					<h3 className='text-center mt-4'>Send Me A Message</h3>
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
							onChange={handleNameChange}
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
							onChange={handleEmailChange}
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
							onChange={handleSubjectChange}
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
							onChange={handleMessageChange}
							required
						/>
					</div>
					<button
						className='border border-black py-4 mt-4 rounded-lg hover:bg-green-600 hover:text-white duration-100'
						type='submit'
					>
						Send Message
					</button>
					<button
						className='border border-black py-4 mt-4 rounded-lg bg-red-300 hover:bg-red-500 hover:text-white duration-100'
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
