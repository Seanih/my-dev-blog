import { useEffect, useState } from 'react';

function UserComment({ comment: { name, comment_text, created_at } }) {
	const [userName, setUserName] = useState('');
	const [userComment, setUserComment] = useState('');
	const [timePosted, setTimePosted] = useState('');

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

	useEffect(() => {
		// transferred props to state to prevent hydration issues
		if (name) {
			setUserName(formattedName(name));
		}
		if (comment_text) {
			setUserComment(comment_text);
		}
		if (created_at) {
			setTimePosted(new Date(created_at).toLocaleString());
		}
	}, [comment_text, created_at, name]);

	return (
		<div className='relative top-20 w-[80%] max-w-[800px]  m-auto border border-black/40 rounded-xl mb-4'>
			<div className='w-[90%] m-auto py-8'>
				<div className='flex flex-wrap justify-between w-4/5 m-auto mb-2 text-sm'>
					<div className='text-sm font-bold'>
						Name:{' '}
						<span className='ml-2 text-base font-normal italic'>
							{userName}
						</span>
					</div>
					<div className='font-bold'>
						Posted:{' '}
						<span className='italic ml-2 font-normal'>{timePosted}</span>
					</div>
				</div>
				<div className='bg-white rounded-xl p-4'>{userComment}</div>
			</div>
		</div>
	);
}
export default UserComment;
