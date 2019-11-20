import React from 'react';
import {Spin, Icon} from 'antd';

const Loader = () => {
    const loaderIcon = <Icon type="loading" style={{ fontSize: 48 }} spin />
    return (
        <div className='loader-page'>
            <Spin  indicator={loaderIcon} />
        </div>
    )
}

export default Loader;
