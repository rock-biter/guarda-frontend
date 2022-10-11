import Footer from './footer'
import Nav from './nav'

const Layout = ({ children, categories, seo }) => (
	<>
		<Nav categories={categories} />
		{children}
		<Footer />
	</>
)

export default Layout
