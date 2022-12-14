import React from 'react'
import Content from '../components/content'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'
import useSite from '../hooks/use-site'

const Home = ({ articles, categories, homepage }) => {
	const { hero, seo, content } = homepage.attributes

	// console.log('global context:', GlobalContext)
	const site = useSite()
	console.log('site', site)

	return (
		<Layout categories={categories}>
			<Seo seo={seo} />
			<div className=''>
				<Hero hero={hero} />
				{/* <ImageSection
					className={'w-3/5'}
					image={image[0].image}
					dimension={image[0].dimension}
					align={image[0].align}
				/> */}
				<Content content={content} />
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	// Run API calls in parallel
	const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
		fetchAPI('/articles', { populate: ['image', 'category'] }),
		fetchAPI('/categories', { populate: '*' }),
		fetchAPI('/homepage', {
			populate: {
				hero: { populate: '*' },
				// Gallery: { populate: '*' },
				content: { populate: '*' },
				seo: { populate: '*' },
			},
		}),
	])

	return {
		props: {
			articles: articlesRes.data,
			categories: categoriesRes.data,
			homepage: homepageRes.data,
		},
		revalidate: 1,
	}
}

export default Home
