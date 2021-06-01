/**
 * Swetha Sankar
 * Function component for each movie box. Uses react hooks and Ant design
 */
import {Card, Col, } from "antd";
import React from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
const MovieBox = ({Title, Poster, ShowDetail, DetailRequest, ActivateModal}) => {

    const detail = () => {
        // Handles API request if user clicks on a movie box

        ActivateModal(true);
        DetailRequest(true);

        fetch(`http://www.omdbapi.com/?t=${Title}&apikey=${API_KEY}`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            DetailRequest(false);
            ShowDetail(response);
        })
        .catch(({message}) => {
            DetailRequest(false);
        })
    }
        return (
        <Col style={{margin: '20px 0'}} className="gutter-row" span={5}>
            <div className="gutter-box">
                <Card
                    style={{ size: 'small' }}
                    title = {Title}
                    cover={
                        <img
                            src={Poster === 'N/A' ? 'http://www.jackflodesign.com/wp-content/plugins/woocommerce/assets/images/placeholder.png' : Poster}
                            alt={Title}
                        />
                    }
                    onClick={() => detail()}
                >
                </Card>
            </div>
        </Col>
    )
}
export default MovieBox;