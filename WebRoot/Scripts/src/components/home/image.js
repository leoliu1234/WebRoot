import React, { PropTypes } from 'react';

export default Image = ({ image }) =>
    <div className="pure-u-1-5 pure-u-md-1-3">
        <div className="image-details">
            <a><img src={image.url} /></a><br />
            <span>Start</span>
        </div>
    </div>;