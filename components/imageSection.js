import classNames from 'classnames'
import Image from './image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const ImageSection = ({ image, dimension, align = 'left', className }) => {
	const sectionRef = useRef()
	const imageWrapperRef = useRef()

	useEffect(() => {
		// gsap.set(imageWrapperRef.current, {
		// 	clipPath: 'inset(100% 0% 0% 100%)',
		// })
		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: 'top 80%',
			end: '+=500px',
			scrub: 1,
			onUpdate(self) {
				gsap.to(imageWrapperRef.current, {
					duration: 1,
					clipPath:
						align === 'left'
							? `inset(${100 - self.progress * 100}%   ${
									100 - self.progress * 100
							  }% 0% 0%)`
							: align === 'right'
							? `inset(${100 - self.progress * 100}% 0% 0%  ${
									100 - self.progress * 100
							  }% )`
							: `inset(${100 - self.progress * 100}%  0% 0% 0%)`,
				})
			},
		})
	}, [])

	return (
		<section
			ref={sectionRef}
			className={classNames(className, 'flex my-12 lg:my-40 xl:my-60', {
				container: dimension === 'small' || dimension === 'medium',
				'justify-start': align === 'left',
				'justify-end': align === 'right',
				'justify-center': align === 'center',
			})}
		>
			<div
				ref={imageWrapperRef}
				className={classNames({
					'w-full lg:w-3/4': dimension === 'large',
					'w-4/5 lg:w-1/2': dimension === 'medium',
					'w-2/3 lg:w-1/3': dimension === 'small',
					'w-full': dimension === 'full',
				})}
				style={{
					clipPath:
						align === 'left'
							? 'inset(100% 100% 0% 0%)'
							: align === 'right'
							? 'inset(100% 0% 0% 100%)'
							: 'inset(100% 0% 0% 0%)',
				}}
			>
				<Image image={image}></Image>
			</div>
		</section>
	)
}

export default ImageSection
