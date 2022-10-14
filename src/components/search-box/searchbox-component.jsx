import { Component } from "react";
import './search-box.style.css';

const SearchBox = ({className, placeholders, onChangeHandler}) =>  {



        return (
            <input className={`search-box ${className}`} type="search" placeholder={placeholders}
                   onChange={onChangeHandler}
            />

        )

}

export default SearchBox;