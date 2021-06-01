/**
 * Swetha Sankar
 * Movie Searcher
 * Main page for configuring layout of website. Calls other components
 */
// React hooks
import React, { useEffect, useState } from 'react';
// Use Ant Design, Bulma for layout and design purposes (switched from Material UI)
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
// Set up general layout of page for Ant Design
const { Header, Content, Footer } = Layout;

function App() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('harry potter');
    const [visibleModal, activateModal] = useState(false);
    const [detail, setShowDetail] = useState(false);
    const [detailRequest, setDetailRequest] = useState(false);


    useEffect(() => {

        setLoading(true);
        setError(null);
        setData(null);

        fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
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

    }, [query]);

    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }
    return (
        <div className="App">
            <Layout className="layout">
                {/* Title */}
                <Header style={{ position: 'sticky', zIndex: 1, width: '100%'}}>
                    <div className = "title is-1 has-text-white-bis ">
                        <div className = "content has-text-centered">
                            <p>
                            Movie Searcher
                            </p>
                        </div>
                    </div>
                </Header>

                {/*Search box and pagination elements*/}
                <Content style={{minHeight: window.screen.availHeight/2, maxWidth: window.screen.availWidth, padding: 20}}>
                        <br/>
                        <SearchBox searchHandler={setQuery} />
                        <br />
                        <section className="content has-text-centered">

                        <Pagination
                            // https://github.com/ant-design/ant-design/tree/master/components/pagination/demo
                            defaultCurrent={1}
                            defaultPageSize={10} //default size of page
                            showSizeChanger = {true}
                            onShowSizeChange = {onShowSizeChange}
                            showTotal = {total => `Total ${total} items`}
                            total={data-1} //total number of card data available
                        />
                        </section>

                    {/* Layout for movie results */}
                        <Row gutter={50} type="flex" justify="center">
                            { loading === true &&
                                <LoadingIcon />
                            }

                            { error !== null &&
                                <div style={{margin: '20px 0'}}>
                                    <Alert message={error} type="error" />
                                </div>
                            }

                            { data !== null && data.length > 0 && data.map((result, index) => (

                                <MovieBox
                                    ShowDetail={setShowDetail}
                                    DetailRequest={setDetailRequest}
                                    ActivateModal={activateModal}
                                    key={index}
                                    {...result}
                                />
                            ))}
                        </Row>
                    <Modal
                        centered
                        footer = {[
                            <Button key = "back" onClick = {() => activateModal(false)}>
                                Return
                            </Button>
                        ]}
                        visible={visibleModal}
                        onCancel={() => activateModal(false)}
                        width={800}
                        >
                        { detailRequest === false ?
                            (<DetailCard {...detail} />) :
                            (<LoadingIcon />)
                        }
                    </Modal>
                </Content>

                {/* Short footer w/ project info */}
                <Footer style={{ position: 'sticky', zIndex: 1, width: '100%'}}>
                    <div className = "footer">
                        <div className = "content has-text-centered">
                            <strong>Movie Searcher </strong> by Swetha Sankar (<a href="https://github.com/swetha-sankar/movie_master">GitHub</a>) 2021
                        </div>
                    </div>
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
