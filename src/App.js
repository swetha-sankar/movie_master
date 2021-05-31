import './App.css';
import Results from "./components/Results";
import SearchBox from "./components/SearchBox";
import React, {useEffect, useState} from "react";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [q, setQuery] = useState('');


    useEffect(() => {

        setLoading(true);
        setError(null);
        setData(null);

        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            if (response.Response === 'False') {
                setError(response.Error);
            }
            else {
                setData(response.Search);
            }

            setLoading(false);
        })
        .catch(({message}) => {
            setError(message);
            setLoading(false);
        })

    }, [q]);
    return (
        <div>
            <div className="title is-1 has-background-primary-light">
                <div className="content has-text-centered">
                    <p>
                        Movie Searcher
                    </p>
                </div>
            </div>
            <SearchBox inputHandler = {setQuery}/>


            <div className="footer has-background-primary-light">
                <div className="content has-text-centered">
                    <p>
                        <strong>Movie Searcher</strong> by Swetha Sankar (github.com/swetha-sankar)
                    </p>
                </div>
            </div>
        </div>
    );

}

export default App;
