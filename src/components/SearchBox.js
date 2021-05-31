import React from "react";
import {useState} from "react"
const API_KEY = process.env.REACT_APP_API_KEY;
export const SearchBox = ({inputHandle})=>
{
    const [values, handleChange] = useState('', null);
    function searchHandler(){

    }

    return (

        <div className="field has-addons has-addons-centered">

            <p className="control">
                <input className="input" type="text" placeholder="Enter Movie Title" value = {values} onChangeCapture={handleChange}/>

            </p>

            <p className="control">
                <a onClick= {searchHandler} className="button is-primary">
                    Search!
                </a>
            </p>
        </div>
    )

}
export default SearchBox;


