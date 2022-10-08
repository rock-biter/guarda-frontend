import ImageSection from './imageSection'

const Content = ({ content }) => {
	return (
		<>
			{content &&
				content.map((el) => {
					const { __component } = el

					switch (__component) {
						case 'sections.image':
							return <ImageSection key={el.id} {...el} />
						// case 'sections.gallery':
					}
				})}
		</>
	)
}

export default Content
