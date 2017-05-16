import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as favoriteActions from '../actions/favorite';
import Main from '../components/favorite/main';
import { Link } from 'react-router';

class Favorite extends React.Component {
    componentDidMount() {
        const { fetchImages } = this.props;
        fetchImages();
    }
    render() {
        var props = this.props;
        return <Main {...props}/>
    }
};

Favorite.propTypes = {
    dispatch: PropTypes.func.isRequired,
    fetchImages: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return { images: state.favorite.images };
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(favoriteActions, dispatch),
        dispatch: dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);