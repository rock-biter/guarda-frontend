import Image from './image'

const ImageSection = ({ image, dimension, align = 'left' }) => {
	return (
		<section>
			<Image image={image}></Image>
		</section>
	)
}

export default ImageSection
