import "./Container.scss"
import React from "react";

interface Props {
	children: React.ReactNode
}

function Container({children}:Props) {
	return (
		<div className=" wr ">
			{ children }
		</div>
	);
}

export default Container;