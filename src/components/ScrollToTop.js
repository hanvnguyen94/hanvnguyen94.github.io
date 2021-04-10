import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
	const { pathname } = useLocation()
	// whenever url path change, scroll on the way to the top
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		})
	}, [pathname])
	return null
}

export default ScrollToTop
