import React, { PropTypes } from 'react';
import Image from './image';

export default class Main extends React.Component {
    render() {
        const { images } = this.props;

        var imageElements = images.map((img, index) =>
            <Image key={index} image={img} />
        );
        return (
            <div id="main">
                <header className="header"><h1>My Gallery</h1></header>
                <section className="content">
                    <div className="pure-g">
                        {imageElements}
                    </div>
                </section>
            </div>
        );
    }
}

Main.propTypes = {
    images: PropTypes.array.isRequired
};