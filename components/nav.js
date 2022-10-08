import Link from 'next/link'

const Nav = ({ categories }) => {
	return (
		<div className='fixed text-white mix-blend-difference z-50 top-0 left-0 right-0 py-3'>
			<nav className='container'>
				<div className=''>
					<ul className=''>
						<li>
							<Link href='/'>
								<a className='font-light'>Giuseppe Versari</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Nav
