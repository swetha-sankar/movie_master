/**
 * Swetha Sankar
 * Functional component for each movie box. Uses react hooks and Ant design
 */
import {Card, Col, Avatar} from "antd";
import React from "react";


const API_KEY = process.env.REACT_APP_API_KEY;
const MovieBox = ({Title, Poster, ShowDetail, DetailRequest, ActivateModal}) => {
    // https://github.com/ant-design/ant-design/blob/master/components/card/demo/meta.md
    const {Meta} = Card;

    const detailHandler = () => {
        /* Handles API request if user clicks on a movie box */
        ActivateModal(true);
        DetailRequest(true);

        // Use movie title to make API request
        fetch(`https://www.omdbapi.com/?t=${Title}&apikey=${API_KEY}`)
            .then(resp => resp)
            .then(resp => resp.json())
            .then(response => {
                DetailRequest(false);
                ShowDetail(response);
            })
            .catch(({message}) => {
                DetailRequest(false);
            })
    };

    const gridStyle = {
        width: '85%',
        textAlign: 'center',
        textOverflow: 'ellipsis',
    };

    const poster = <img
        // If the poster doesn't exist, use the placeholder image
        src={Poster === 'N/A' ? 'http://www.jackflodesign.com/wp-content/plugins/woocommerce/assets/images/placeholder.png' : Poster}
        alt={Title}
        width={250}
        height={250}
    />;

    return (
        <Col style={{margin: '5px 0'}} className="gutter-row" span={5}>
            <div className="site-card-wrapper" style={{margin: '5px'}}>
                <Card
                    style={gridStyle}
                    bordered={false}
                    cover={poster}
                    onClick={() => detailHandler()}
                >
                    <Meta
                        avatar={<Avatar size={9}/>}
                        title={Title}
                    />
                </Card>
            </div>
        </Col>
    )
};
export default MovieBox;