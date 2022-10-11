import classNames from 'classnames'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const TextCarousel = ({ className, text, direction = 'left' }) => {
	const elements = new Array(10).fill(text)
	const textRef = useRef()
	let st
	const dir = direction === 'left' ? -1 : 1

	useEffect(() => {
		const text = textRef.current

		if (!text) return

		if (st) st.kill()

		st = ScrollTrigger.create({
			trigger: text,
			start: 'top bottom',
			end: 'bottom top',
			scrub: 1,
			onUpdate(self) {
				gsap.to(text, { duration: 1, xPercent: self.progress * 8 * dir })
			},
		})
	}, [])

	return (
		<section
			className={classNames(
				'text-carousel overflow-hidden flex justify-center my-10 lg:-my-20',
				className
			)}
		>
			<div
				ref={textRef}
				className='text-8xl lg:text-[12rem] pointer-events-none flex w-max gap-16 text-white mix-blend-difference uppercase italic'
			>
				{elements.map((el, i) => {
					return (
						<>
							<div className='whitespace-nowrap' key={i}>
								{el}
							</div>
							{i < elements.length && <div key={i + '-'}>-</div>}
						</>
					)
				})}
			</div>
		</section>
	)
}

export default TextCarousel
