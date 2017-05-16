import React, { PropTypes } from 'react';

export default Image = ({ data }) =>
    <div className="big-image">
        <img src={data.url} />
    </div>;