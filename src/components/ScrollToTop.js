import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
	const { pathname } = useLocation()
	// whenever url path change, scroll all the way to the top
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}

export default ScrollToTop
