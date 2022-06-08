import React, { useEffect, useState } from "react";
import './Search.scss'
import { useParams } from 'react-router-dom';
import { Link, Route } from "react-router-dom";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		}
	}



	handleSubmit = () => {
		this.setState({ name: this.name.value })
		console.log(this.state.name)
		/* fetch(`http://localhost:3000/api/product/search/${this.state.value}`,
			{
				method: "GET",
			}
		)
			.then(response => response.json())
			.then(
				(result) => {
					console.log(JSON.parse(JSON.stringify(result)))
					this.setState(result);
					console.log(this.state)
				},

			) */
	}

	render() {
		return (
			<form >
				<input className="search" type="text" id="site-search" name="name" ref={(ref) => { this.name = ref }} />
				{/* <Link to="/search_product"
					state={ this.state }
				> */}

				<button onClick={this.handleSubmit} type="submit" className="search_btn">Поиск</button>
				{/* 				</ Link>
 */}			</form >
		);
	}
}

export default Search;