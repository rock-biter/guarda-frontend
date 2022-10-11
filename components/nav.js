import Link from 'next/link'
import useSite from '../hooks/use-site'

const Nav = ({ categories }) => {
	const { siteName, email } = useSite()

	return (
		<div className='fixed text-white mix-blend-difference z-50 top-0 left-0 right-0 py-3 px-6 lg:px-12'>
			<nav className='container'>
				<div className=''>
					<ul className='flex gap-12 font-sans'>
						<li className='mr-auto'>
							{/* <Link href='/'> */}
							<span className='font-light whitespace-nowrap'>{siteName}</span>
							{/* </Link> */}
						</li>
						<li>
							<a href={`mailto:${email}`}>{email}</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Nav
