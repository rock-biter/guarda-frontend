import { useContext, createContext } from 'react'

export const SiteContext = createContext('')

export function useSiteContext(data) {
	// let { homepage = '' } = config

	// Trim the trailing slash from the end of homepage to avoid
	// double // issues throughout the metadata

	// homepage = removeLastTrailingSlash(homepage)

	return {
		...data,
		// homepage,
	}
}

/**
 * useSite
 */
export default function useSite() {
	const { site } = useContext(SiteContext)
	return site
}

/**
 * useSiteWithSetter
 */

export function useSiteWithSetter() {
	const { site, setSite } = useContext(SiteContext)
	return { site, setSite }
}
