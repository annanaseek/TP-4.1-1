import styles from "./Container.module.scss"
import React from "react";

function Container({children}) {
	return (
		<div className={ styles.wr }>
			{ children }
		</div>
	);
}

export default Container;