import React from "react";
import './Title.scss'

interface Props {
	children: string
}

const Title = ({ children }: Props) => {
	return (
		<h2 className="h2">
			{children}
		</h2>
	);
}

export default Title;