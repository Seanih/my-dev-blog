import Link from 'next/link';

function AdminNav({ page }) {
	return (
		<div className='flex justify-center'>
			<Link
				className='p-2 hover:font-bold hover:border hover:border-black duration-100'
				href={
					page === '/admin/create-post'
						? '/admin/edit-post'
						: '/admin/create-post'
				}
			>
				<button className='underline' type='button'>
					{page === '/admin/create-post' ? 'Edit A Post' : 'Create A Post'}
				</button>
			</Link>
		</div>
	);
}
export default AdminNav;
