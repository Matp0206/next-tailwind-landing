import React from 'react'

export default function ProjectComponent({ imgClss = '', imgUrl = '' }) {
	return (
		<div>
			<img className={imgClss} src={imgUrl} alt="project" />
		</div>
	)
}
