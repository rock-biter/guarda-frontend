import Image from './image'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(SplitText, ScrollTrigger)

const Hero = ({ hero }) => {
	const { title, subtitle, cover } = hero
	const titleRef = useRef()
	const imageRef = useRef()
	const heroRef = useRef()

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
					onStart() {
						gsap.set(title, { opacity: 1 })
					},
				}
			)
		}

		const image = imageRef.current
		if (image) {
			if (scrollTrigger) scrollTrigger.kill()
			scrollTrigger = ScrollTrigger.create({
				trigger: heroRef.current,
				scrub: 1,
				// pin: true,
				start: 'top top',
				// markers: true,
				end: '+=500px',
				onUpdate(self) {
					gsap.to(image, {
						duration: 0.5,
						width: 300 + self.progress * (heroRef.current.clientWidth - 300),
					})
				},
				// width: window.innerWidth,
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
		<div ref={heroRef}>
			<section className='overflow-hidden mb-20 lg:mb-40 xl:mb-80 pt-[30vh]'>
				<div>
					<h1
						ref={titleRef}
						style={{ opacity: 0 }}
						className='text-5xl lg:text-8xl text-center  font-serif'
					>
						{title}
						<br />

						<p className='font-sans text-xl text-center mt-4'>{subtitle}</p>
					</h1>
					{/* <h1 className='text-5xl text-center font-sans'>{hero.title}</h1> */}
				</div>
				<div>
					<div
						ref={imageRef}
						style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
						className='relative mx-auto mt-12 h-[60vh] lg:h-[100vh] w-[300px]'
					>
						<Image layout='fill' image={cover} />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Hero
