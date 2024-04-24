import React from 'react'
import { pageLinks } from '../data'

const PageLinks = ({ navLinkClass }) => {
	return pageLinks.map(link => {
		const { id, href, text } = link

		return (
			<li key={id}>
				<a href={href} className={navLinkClass}>
					{text}
				</a>
			</li>
		)
	})
}

export default PageLinks
