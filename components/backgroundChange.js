import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const BackgroundChange = ({ color }) => {
	const bgRef = useRef()
	let st

	const colors = {
		prev: null,
	}

	useEffect(() => {
		const bg = bgRef.current

		if (!bg) return

		if (st) st.kill()

		st = ScrollTrigger.create({
			trigger: bg,
			start: 'top center',
			end: '+=10px',
			onEnter() {
				if (!colors.prev)
					colors.prev = window.getComputedStyle(document.body).backgroundColor

				// setPrevColor(prev)
				gsap.to(document.body, { duration: 0.7, background: color })
			},
			onLeaveBack() {
				gsap.to(document.body, { duration: 0.7, background: colors.prev })
			},
		})

		return () => {
			st.kill()
		}
	}, [])

	return <div ref={bgRef}></div>
}

export default BackgroundChange
