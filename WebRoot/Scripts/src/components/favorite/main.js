import React, { PropTypes } from 'react';
import Image from './image';

const Main = ({ images }) => {
    var elements = images.map((img, index) =>
        <Image key={index} data={img} />
    );

    return <div id="main" className="favorite">
        <header className="header">
            <h1>My Favorite</h1>
        </header>
        <section className="content">
            <div></div>
            <div className="pure-g">
                <div className="pure-u-3-4">
                    {elements}
                </div>
                <div className="pure-u-1-4"><p>Thirds</p></div>
            </div>
        </section>
    </div>
};

export default Main;