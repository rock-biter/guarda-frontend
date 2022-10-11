const classNames = require('classnames')
const { useRef, useEffect } = require('react')
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)

const Paragraph = ({ paragraph, side = 'left' }) => {
	const paraRef = useRef()

	useEffect(() => {
		const para = paraRef.current

		if (!para) return

		setTimeout(() => {
			const splittedPara = new SplitText(para, { type: 'words,lines' })
			gsap.set(splittedPara.words, { autoAlpha: 0 })

			ScrollTrigger.batch(splittedPara.words, {
				start: 'top 90%',
				onEnter(elements, triggers) {
					gsap.fromTo(
						elements,
						{ autoAlpha: 0, y: 30, rotate: 10 },
						{ duration: 0.5, autoAlpha: 1, y: 0, rotate: 0, stagger: 0.1 }
					)
				},
			})
		}, 200)

		return () => {
			// st.forEach((el) => el.kill && el.kill())
		}
	}, [])

	return (
		<section className='px-6 lg:px-12 my-20'>
			<div
				className={classNames('container flex', {
					'justify-end': side === 'right',
					'justify-center': side === 'center',
				})}
			>
				<div
					ref={paraRef}
					className={classNames({
						'lg:w-1/2 text-2xl lg:text-4xl font-serif !leading-[1.3em] paragraph text-white mix-blend-difference': true,
					})}
				>
					{paragraph}
				</div>
			</div>
		</section>
	)
}

export default Paragraph
