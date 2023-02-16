function UserComment({ comment: { name, comment_text, created_at } }) {
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

	const timePosted = new Date(created_at).toLocaleString();

	return (
		<div className='relative top-20 w-[80%] max-w-[1080px]  m-auto border border-black/40 rounded-xl mb-4'>
			<div className='w-[90%] m-auto py-12'>
				<div className='flex flex-wrap justify-between w-4/5 m-auto'>
					<p className="mr-6">
						<strong className='text-sm mr-2'>Name: </strong>{' '}
						{formattedName(name)}
					</p>
					<p>
						<i className='text-sm'>
							<strong className='mr-2'>Posted: </strong>
							{timePosted}
						</i>
					</p>
				</div>
				<div className='bg-white rounded-xl p-4'>
					<p className='m-0'>
						<i>{comment_text}</i>
					</p>
				</div>
			</div>
		</div>
	);
}
export default UserComment;
