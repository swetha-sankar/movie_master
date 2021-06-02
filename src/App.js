/**
 * Swetha Sankar
 * Movie Searcher
 * Main page for configuring layout of website. Calls other components
 */
// React hooks
import React, {useEffect, useState} from 'react';
// Use Ant Design, Bulma for layout and design purposes
import 'antd/dist/antd.css';
import {
    Layout,
    Alert,
    Row,
    Modal,
    Button,
    Pagination
} from 'antd';

//import { Card, CardActions, CardContent, makeStyles, Button, Typography } from '@material-ui/core';
import MovieBox from "./components/MovieBox"
import SearchBox from "./components/SearchBox"
import DetailCard from "./components/DetailCard"
import LoadingIcon from "./components/LoadingIcon"

// API key stored in .env file
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, isLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [visibleModal, activateModal] = useState(false);
    const [detail, setShowDetail] = useState(false);
    const [total, setTotal] = useState(0);
    const [detailRequest, setDetailRequest] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {

        isLoading(true);
        setError(null);
        setData(null);
        setTotal(0);
        setPage(1);

        fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&type="movie"&apikey=${API_KEY}`)

            .then(resp => resp)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === 'False') {
                    if (!(response.Error === "Incorrect IMDb ID.")) {
                        // Unnecessary error message
                        setError(response.Error);
                        isLoading(false);
                    }
                } else {
                    setTotal(response.totalResults);
                    setData(response.Search);
                }
                isLoading(false);
            })
            .catch(({message}) => {
                setError(message);
                isLoading(false);
            })

    }, [query]);


    const pageSwitcher = (newPage) => {
       // Switches the page and makes a new request to the API w/ the page number
        <Pagination current = {newPage} />
        fetch(`https://www.omdbapi.com/?s=${query}&page=${newPage}&type="movie"&apikey=${API_KEY}`)
            .then(resp => resp)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === 'False') {
                    if (!(response.Error === "Incorrect IMDb ID.")) {
                        // Unnecessary error message
                        setError(response.Error);
                        isLoading(false);
                    }
                } else {
                    console.log(response.Search);
                    setData(response.Search);
                }
                isLoading(false);
            })
            .catch(({message}) => {
                setError(message);
                isLoading(false);
            })

    };


    return (
        <div className="App">
            <Layout className="layout">
                <div className="title is-1 has-text-black-bis is-spaced has-background-link-light">
                    <div className="content has-text-centered">
                        <p>
                            Movie Searcher
                        </p>
                    </div>
                </div>
                <div className="subtitle is-5 has-text-black-bis">
                    <div className="content has-text-centered">
                        <p>
                            Find a movie you like, and click on the poster for more details!
                        </p>
                    </div>
                </div>

                {/*Search box and pagination element*/}
                <SearchBox searchHandler={setQuery}/>
                <br/>
                <section className="content has-text-centered">
                    <Pagination
                        // https://github.com/ant-design/ant-design/tree/master/components/pagination/demo
                        defaultCurrent = {1}
                        onChange={pageSwitcher}
                        showSizeChanger={false}
                        total={total} //total number of card data available
                        showTotal={totalResults => `${totalResults} items total`}
                    />
                </section>

                <Row gutter={25} type="flex" justify="center">
                    {error !== null &&
                    <div style={{margin: '20px 0'}}>
                        <Alert message={error} type="error"/>
                    </div>
                    }
                    {loading === true &&
                    <LoadingIcon/>
                    }
                    {/* Layout for movie results
                    https://medium.com/wesionary-team/how-to-implement-ant-design-with-react-7d21b6e261cc
                    */}
                    {data !== null && data.length > 0 && data.map((result, index) => (
                        <MovieBox
                            key={index}
                            {...result}
                            ShowDetail={setShowDetail}
                            DetailRequest={setDetailRequest}
                            ActivateModal={activateModal}
                        />
                    ))}


                </Row>
                {/* Modal (Detail Card) that appears when you click on a poster */}
                <Modal
                    centered
                    footer={[
                        <Button key="back" onClick={() => activateModal(false)}>
                            Return
                        </Button>
                    ]}
                    onCancel={() => activateModal(false)}
                    width={600}
                    visible={visibleModal}
                >
                    {detailRequest === false ?
                        (<DetailCard {...detail} />) :
                        (<LoadingIcon/>)
                    }
                </Modal>

                {/* Short footer w/ project info */}
                <div className="footer">
                    <div className="content has-text-centered">
                        <strong>Movie Searcher </strong> by Swetha Sankar (<a
                        href="https://github.com/swetha-sankar/movie_master">GitHub</a>) 2021
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default App;
