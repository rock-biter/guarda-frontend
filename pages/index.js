import React from 'react'
import Articles from '../components/articles'
import Image from '../components/image'
import ImageSection from '../components/imageSection'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

const Home = ({ articles, categories, homepage }) => {
	const { hero, seo, image } = homepage.attributes
	return (
		<Layout categories={categories}>
			<Seo seo={seo} />
			<div className='uk-section'>
				<div className='uk-container uk-container-large'>
					<h1>{hero.title}</h1>
					<Image image={hero.cover} />
					{/* <Articles articles={articles} /> */}

					<ImageSection
						image={image[0].image}
						dimension={image[0].dimension}
						align={image[0].align}
					/>
				</div>
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
				Gallery: { populate: '*' },
				image: { populate: '*' },
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
