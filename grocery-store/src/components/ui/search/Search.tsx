import React from "react";
import './Search.scss'

const Search = () => {
    return (
        <>
            <input className="search" type="search" id="site-search" name="search"/>
            <button className="search_btn">Поиск</button>
        </>
    );
}

export default Search;