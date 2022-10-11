import App from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import { useState } from 'react'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'

// Store Strapi Global object in context
// export const GlobalContext = createContext({})

import { SiteContext, useSiteContext } from '../hooks/use-site'

const MyApp = ({ Component, pageProps }) => {
	const { global } = pageProps

	const siteInit = useSiteContext({
		...global.attributes,
	})

	const [site, setSite] = useState(siteInit)

	return (
		<>
			<Head>
				<link
					rel='shortcut icon'
					href={getStrapiMedia(global.attributes.favicon)}
				/>
			</Head>
			<SiteContext.Provider value={{ site, setSite }}>
				<Component {...pageProps} />
			</SiteContext.Provider>
		</>
	)
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(ctx)
	// Fetch global site settings from Strapi
	const globalRes = await fetchAPI('/global', {
		populate: {
			favicon: '*',
			defaultSeo: {
				populate: '*',
			},
			email: '*',
			address: '*',
			city: '*',
			payoff: '*',
		},
	})
	// Pass the data to our page via props
	return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp
