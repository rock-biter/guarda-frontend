const classNames = require('classnames')
const { default: useSite } = require('../hooks/use-site')
const { default: Image } = require('./image')

const Footer = ({ className }) => {
	const { email, siteName, payoff, favicon, defaultSeo } = useSite()

	return (
		<footer className={classNames(className, 'pt-40 pb-28 px-6 lg:px-12')}>
			<div className='container flex items-center flex-wrap lg:flex-nowrap'>
				<div className='grow basis-full md:basis-0'>
					<ul>
						<li className='flex items-center gap-6'>
							<div className='w-10 h-10'>
								<Image image={favicon} />
							</div>
							<h3>{defaultSeo.metaTitle}</h3>
						</li>
						{/* <li>{siteName}</li> */}
					</ul>
				</div>
				<div className='grow basis-full md:basis-0 text-center lg:text-right text-4xl py-4 lg:text-6xl underline text-amber-600 hover:text-amber-800'>
					<a href={`mailto:${email}`}>{email}</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
