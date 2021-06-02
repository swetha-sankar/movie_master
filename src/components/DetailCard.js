/**
 * Swetha Sankar
 * Functional component for card that displays more details about each movie. When expanded, displays poster,
 * movie language, director(s), genre(s), release date, IMDb rating, plot and title.
 */

import {Col, Row, Tag} from "antd";
import React from "react";

const DetailCard = ({Title, Poster, Language, imdbRating, Runtime, Genre, Plot, Released, Director}) => {

    // Set colors of tags within the card according to the imdbRating value (red = bad, green = good, yellow = eh)
    var coloring = 'error';
    var tagColor = '#f50';
    if (parseInt(imdbRating) >= 7.0) {
        coloring = 'success';
        tagColor = '#87d068'
    } else if (parseInt(imdbRating) >= 5.0) {
        coloring = 'warning'
        tagColor = 'gold-inverse'
    }

    return (
        <Row>
            <Col span={13}>
                <Row>
                    <Col span={25}>
                        <div className="title is-3">
                            <div className="content is-centered">
                                {Title}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: '25px', marginBottom: '10px'}}>
                    <Col>
                        {/* Tag documentation:  https://ant.design/components/tag/*/}

                        <Tag color={coloring}>  {"IMDb Rating: " + imdbRating}</Tag>
                        <Tag color={tagColor}> {"Release Date: " + Released}</Tag>
                        <Tag color={tagColor}>{"Runtime: " + Runtime} </Tag>
                        <Tag color={tagColor}>{"Genre(s): " + Genre}</Tag>
                        <Tag color={tagColor}> {"Director(s): " + Director}</Tag>
                        <Tag color={tagColor}> {"Language(s): " + Language}</Tag>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="subtitle is-6"> {Plot} </div>
                    </Col>
                </Row>
            </Col>
            <Col>
                <div className="content is-centered">
                    <img
                        // If the poster doesn't exist, use the placeholder image
                        src={Poster === 'N/A' ? 'http://www.jackflodesign.com/wp-content/plugins/woocommerce/assets/images/placeholder.png' : Poster}
                        alt={Title}
                        width={250}
                        height={250}
                    />
                </div>
            </Col>
        </Row>
    )
}
export default DetailCard;