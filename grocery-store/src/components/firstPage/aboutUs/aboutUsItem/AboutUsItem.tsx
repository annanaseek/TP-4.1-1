import React from "react";
import './AboutUsItem.scss'

interface Props {
	number: number,
	text: string
}

const AboutUsItem = ({ number, text }: Props) => {
	return (
		<div className="aboutUsItem">
			<div className="aboutUsItem_num">{number}</div>
			<div className="aboutUsItem_text" dangerouslySetInnerHTML={{ __html:text }}/>

		</div>
	);
}

export default AboutUsItem;