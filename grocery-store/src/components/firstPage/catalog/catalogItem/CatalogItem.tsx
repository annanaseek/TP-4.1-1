import React from "react";
import './catalogItem.scss'
import {Link} from "react-router-dom"
interface Props {
	text: string,
	img: string,
	color: string,
	href: string
}

const CatalogItem = ({ text, img, color, href }: Props) => {
	return (
		<div className="catalogItem" style={{ background: `${color}` }}>
			<Link to={href} >
				<div className="catalogItem_text" dangerouslySetInnerHTML={{ __html: text }} />
				<div className="catalog_img">
					<img src={`/catalog/${img}`} alt="" />
				</div>
			</Link>
		</div>
	);
}

export default CatalogItem;