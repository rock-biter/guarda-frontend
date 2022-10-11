import BackgroundChange from './backgroundChange'
import Gallery from './gallery'
import ImageSection from './imageSection'
import Paragraph from './paragraph'
import TextCarousel from './textCarousel'

const Content = ({ content }) => {
	return (
		<>
			{content &&
				content.map((el, i) => {
					const { __component } = el

					switch (__component) {
						case 'sections.image':
							return <ImageSection key={i} {...el} />
						case 'sections.gallery':
							return <Gallery key={i} {...el} />
						case 'sections.text-carousel':
							return <TextCarousel key={i} {...el} />
						case 'sections.background':
							return <BackgroundChange key={i} {...el} />
						case 'sections.paragraph':
							return <Paragraph key={i} {...el} />
					}
				})}
		</>
	)
}

export default Content
