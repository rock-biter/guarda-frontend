import Image from './image'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(SplitText, ScrollTrigger)

const Hero = ({ hero }) => {
	const titleRef = useRef()
	const imageRef = useRef()

	useEffect(() => {
		const title = titleRef.current
		let splittedTitle, scrollTrigger

		if (title) {
			splittedTitle = new SplitText(title, { type: 'chars' })
			gsap.set(splittedTitle.chars, { opacity: 0 })

			gsap.fromTo(
				splittedTitle.chars,
				{ y: -20, opacity: 0 },
				{
					duration: 0.7,
					y: 0,
					opacity: 1,
					stagger: 0.08,
					delay: 1.2,
					ease: 'power4.out',
				}
			)
		}

		const image = imageRef.current
		if (image) {
			scrollTrigger = ScrollTrigger.create({
				trigger: '#hero',
				scrub: 1,
				start: 'top top',
				end: '+=1000',
				onUpdate(self) {
					gsap.to(image, {
						duration: 0.5,
						width: 300 + self.progress * (window.innerWidth - 300),
					})

					// gsap.to(splittedTitle.chars, {
					// 	duration: 0.2,
					// 	y: (i, el) => {
					// 		gsap.to(el, {
					// 			duration: 0.5,
					// 			y: i * 2 * self.progress * -30,
					// 		})
					// 	},
					// })
					// image.style.width = 200 + self.progress * (window.innerWidth - 200)
				},
			})

			gsap.to(image, {
				duration: 2,
				clipPath: 'inset(0% 0% 0% 0%)',
				ease: 'power3.out',
				onComplete() {},
			})
		}
	}, [])

	return (
		<section id='hero' className='overflow-hidden  py-40'>
			<div>
				<h1 ref={titleRef} className='text-5xl text-center font-thin'>
					{hero.title}
				</h1>
			</div>
			<div>
				<div
					ref={imageRef}
					style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
					className='relative mx-auto mt-12 h-[100vh] w-[300px]'
				>
					<Image layout='fill' image={hero.cover} />
				</div>
			</div>
		</section>
	)
}

export default Hero
