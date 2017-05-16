import React, { PropTypes } from 'react';

export default class Main extends React.Component {
    render() {
        const { images } = this.props;

        var imageElements = images.map(img => {
            return <div className="pure-u-1-5 pure-u-md-1-3">
                <div className="image-details">
                    <a><img src={img.url} /></a>
                </div>
            </div>;
        });
        return (
            <div id="main">
                <header className="header"><h1>My Gallery</h1></header>
                <section className="content">
                    <div className="pure-g">
                        {imageElements}
                    </div>
                </section>
                <footer className="footer">&copy; 2017 Leo  </footer>
            </div>
        );
    }
}

Main.propTypes = {
    images: PropTypes.array.isRequired
};