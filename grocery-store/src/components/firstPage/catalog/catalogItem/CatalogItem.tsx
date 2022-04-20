import React from "react";
import './catalogItem.scss'
interface Props {
	text: string,
	img: string,
	color: string
}

const CatalogItem = ({ text, img, color }: Props) => {
	return (
		<div className="catalogItem" style={{ background: `${color}` }}>
			<a href="#" >
				<div className="catalogItem_text" dangerouslySetInnerHTML={{ __html: text }} />
				<div className="catalog_img">
					<img src={`./catalog/${img}`} alt="" />
				</div>
			</a>
		</div>
	);
}

export default CatalogItem;