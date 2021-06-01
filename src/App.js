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
    Col,
    Modal,
    Pagination
} from 'antd';

//import { Card, CardActions, CardContent, makeStyles, Button, Typography } from '@material-ui/core';
import Box from "./components/Box"
import SearchBox from "./components/SearchBox"
import MovieCard from "./components/MovieCard"
import Load from "./components/Load"

// API key stored in .env file
const API_KEY = process.env.REACT_APP_API_KEY;
// Set up general layout of page for Ant Design
const { Header, Content, Footer } = Layout;

function App() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('enter');
    const [activateModal, setActivateModal] = useState(false);
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

    const handleChange = value => {
        if (value <= 1) {
          this.setState({
            minValue: 0,
            maxValue: 9
          });
        } else {
          this.setState({
            minValue: this.state.maxValue,
            maxValue: value * 9
          });
        }
    };
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
                            defaultCurrent={1}
                            defaultPageSize={4} //default size of page
                            showSizeChanger = {true}
                            showTitle={true}
                            //onChange={this.handleChange}
                            total={3} //total number of card data available
                        />
                        </section>

                    {/* Layout for movie results */}
                        <Row gutter={50} type="flex" justify="center">
                            { loading === true &&
                                <Load />
                            }

                            { error !== null &&
                                <div style={{margin: '20px 0'}}>
                                    <Alert message={error} type="error" />
                                </div>
                            }

                            { data !== null && data.length > 0 && data.map((result, index) => (

                                <Box
                                    ShowDetail={setShowDetail}
                                    DetailRequest={setDetailRequest}
                                    ActivateModal={setActivateModal}
                                    key={index}
                                    {...result}
                                />
                            ))}
                        </Row>
                    <Modal
                        title='Detail'
                        centered
                        visible={activateModal}
                        onCancel={() => setActivateModal(false)}
                        footer={null}
                        width={800}
                        >
                        { detailRequest === false ?
                            (<MovieCard {...detail} />) :
                            (<Load />)
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
