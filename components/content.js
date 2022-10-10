import Gallery from './gallery'
import ImageSection from './imageSection'

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
					}
				})}
		</>
	)
}

export default Content
