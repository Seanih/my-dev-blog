import { useState, useEffect } from 'react';

function UserComment({
	userEmail,
	comment: { name, email, comment_text, created_at },
}) {
	const [datePosted, setDatePosted] = useState('');
	// capitalize the first letters of the user's names
	const formattedName = user_name => {
		let fixedName;
		let splitName = user_name.split(' ');

		if (splitName.length > 1) {
			fixedName =
				splitName[0].toUpperCase().slice(0, 1) +
				splitName[0].slice(1) +
				' ' +
				splitName[1].toUpperCase().slice(0, 1) +
				'.';
		} else {
			fixedName =
				splitName[0].toUpperCase().slice(0, 1) + splitName[0].slice(1);
		}

		return fixedName;
	};

	// prevents hydration errors
	useEffect(() => {
		setDatePosted(new Date(created_at).toLocaleString());
	}, [created_at]);

	return (
		<div className='w-[80%] max-w-[800px] m-auto border border-black/40 rounded-xl mb-4'>
			<div className='w-[90%] m-auto py-4'>
				<div className='flex flex-wrap justify-between items-center w-4/5 m-auto mb-2 text-sm'>
					<div className='text-sm font-bold mr-4'>
						Name:{' '}
						<span className='ml-2 text-base font-normal italic'>
							{formattedName(name)}
						</span>
					</div>
					<div className='font-bold'>
						Posted:{' '}
						<span className='italic ml-2 font-normal'>{datePosted}</span>
					</div>
				</div>
				<div className='bg-white rounded-xl p-4'>{comment_text}</div>
				{/* DELETE or EDIT comment */}
				{userEmail === email && (
					<div className='flex mt-4'>
						<button
							className='mr-4 border border-black px-4 rounded-md bg-sky-700 text-white hover:bg-sky-600 hover:scale-105 hover:font-semibold hover:cursor-pointer ease-in duration-150'
							type='button'
						>
							edit
						</button>
						<button
							className='border border-black px-4 rounded-md bg-red-600 text-white hover:bg-red-500 hover:scale-105 hover:font-semibold hover:cursor-pointer ease-in duration-150'
							type='button'
						>
							delete
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
export default UserComment;
