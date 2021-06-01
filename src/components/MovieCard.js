/**
 * Swetha Sankar
 * Functional component for card that displays more details about each movie. When expanded, displays poster,
 * movie language, director(s), genre(s), release date, IMDb rating, plot and title.
 */

import {Col, Row, Tag} from "antd";
import React from "react";

const MovieCard = ({Title, Poster, Language, imdbRating, Runtime, Genre, Plot, Released, Director}) => {
    var coloring = 'magenta';
    if({imdbRating} >= 5.0){
        coloring = 'green';
    }
    console.log(coloring);
    return (
        <Row>
            <Col span={11}>
                <img
                    // If the poster doesn't exist, use the placeholder image
                    src={Poster === 'N/A' ? 'http://www.jackflodesign.com/wp-content/plugins/woocommerce/assets/images/placeholder.png' : Poster}
                    alt={Title}
                />
            </Col>
            <Col span={13}>
                <Row>
                    <Col span={25}>
                        <div className = "title is-3">
                            <div className = "content is-centered">
                            {Title}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom: '10px'}}>
                    <Col>
                        {/* Release date, Runtime, Genre, Director, Rating at minimum */}
                        <Tag color={coloring}>  {"IMDb Rating: " + imdbRating}</Tag>
                        <Tag> {"Release Date: " + Released}</Tag>
                        <Tag>{"Runtime: " + Runtime}</Tag>
                        <br/>
                        <Tag>{"Genre(s): " + Genre}</Tag>
                        <Tag> {"Director(s): " + Director}</Tag>
                        <Tag> {"Language(s): " + Language}</Tag>

                    </Col>
                </Row>
                <Row>
                    <Col><div className = "subtitle is-6" > {Plot} </div></Col>
                </Row>
            </Col>
        </Row>
    )
}
export default MovieCard;