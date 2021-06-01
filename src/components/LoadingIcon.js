/**
 * Swetha Sankar
 * LoadingIcon functional component (from Ant design -- default loader)
 */

import {Spin} from "antd";
import React from "react";

const LoadingIcon = () => (
    <div style={{margin: '20px 0', textAlign: 'center'}}>
        <Spin size='large' />
    </div>
)
export default LoadingIcon;