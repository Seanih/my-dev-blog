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
					<ul className='flex mt-4'>
						<li className='mr-8 hover:text-sky-700 hover:font-semibold hover:underline hover:cursor-pointer'>
							edit
						</li>
						<li className='hover:text-sky-700 hover:font-semibold hover:underline hover:cursor-pointer'>
							delete
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}
export default UserComment;
