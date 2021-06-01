/**
 * Swetha Sankar
 * Functional component for search box. Uses Ant Design for formatting and React hooks for functionality.
 */
import {Col, Input, Row} from "antd";
import React from "react";
const { Search } = Input;
// https://github.com/ant-design/ant-design/blob/master/components/input/demo/search-input.md
const SearchBox = ({searchHandler}) => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Search
                    placeholder="Enter movie title"
                    enterButton ="Search!"
                    size="large"
                    allowClear
                    onSearch={value => searchHandler(value)}
                />
            </Col>
        </Row>
    )
}
export default SearchBox;