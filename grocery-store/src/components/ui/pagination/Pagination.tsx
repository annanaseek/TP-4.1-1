import React from "react";
import './Pagination.scss'
const Pagination = () => {
	return (
		<>
			<span className="pagination_active">
				1
			</span>
			<span className="pagination">
				2
			</span>
			<span className="pagination">
				4
			</span>
			<span className="pagination">
				5
			</span>
			<span className="points">
				...
			</span>
			<span className="pagination">
				10
			</span>
		</>

	);
}

export default Pagination;