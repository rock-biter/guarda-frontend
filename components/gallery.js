import Image from './image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState } from 'react'
gsap.registerPlugin(ScrollTrigger)
const Gallery = ({ className, images, direction = 'right', color }) => {
	const galleryRef = useRef()
	const imagesRef = useRef()
	// let wrapperScroll, imagesScroll
	const dir = direction === 'left' ? -1 : 1

	useEffect(() => {
		if (!galleryRef.current) return

		// if (wrapperScroll) wrapperScroll.kill()
		// if (imagesScroll) imagesScroll.kill()

		// console.log('create scroll trigger', st)
		gsap.set(imagesRef.current, {
			xPercent: -110 * dir,
		})

		// wrapperScroll = ScrollTrigger.create({
		// 	trigger: galleryRef.current,
		// 	start: 'center center',
		// 	end: '+=100',
		// 	pin: true,
		// 	scrub: true,
		// })

		ScrollTrigger.create({
			trigger: galleryRef.current,
			start: 'top bottom',
			end: 'bottom top',
			scrub: true,
			// onEnter() {
			// 	gsap.to(document.body, { duration: 0.5, background: color })
			// },
			// onEnterBack() {
			// 	gsap.to(document.body, { duration: 0.5, background: color })
			// },
			// onLeave() {
			// 	gsap.to(document.body, { duration: 0.5, background: 'white' })
			// },
			// onLeaveBack() {
			// 	gsap.to(document.body, { duration: 0.5, background: 'white' })
			// },
			onUpdate(self) {
				const progress = (self.progress - 0.5) * 2 * dir
				// console.log(progress)
				gsap.to(imagesRef.current, {
					duration: 1,
					xPercent: progress * 110,
					ease: 'power2.out',
				})
			},
		})
	}, [galleryRef])

	return (
		<section ref={galleryRef} className='overflow-hidden'>
			<div className='container'>
				<div
					ref={imagesRef}
					className='flex w-max gap-20 items-center py-8 lg:py-28'
				>
					{images.data.map((image, i) => {
						return (
							<div
								key={image.id}
								className='relative max-w-[70vw] w-[50vh] pointer-events-none bg-white aspect-square'
							>
								<Image image={image} layout='fill' />
								{/* ciao */}
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Gallery
