import { getStrapiMedia } from '../lib/media'
import NextImage from 'next/image'

const Image = ({ image, layout = 'responsive', ref = null }) => {
	const { alternativeText, width, height } =
		image.data?.attributes || image.attributes

	return (
		<NextImage
			layout={layout}
			ref={ref}
			width={width}
			height={height}
			objectFit='cover'
			src={getStrapiMedia(image)}
			alt={alternativeText || ''}
		/>
	)
}

export default Image
