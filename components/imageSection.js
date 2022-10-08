import Image from './image'

const ImageSection = ({ image, dimension, align = 'left', className }) => {
	return (
		<section className={className}>
			<Image image={image}></Image>
		</section>
	)
}

export default ImageSection
