import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as homeActions from '../actions/home';
import Main from '../components/home/main';
import {Link} from 'react-router';

class Home extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(homeActions.fetchImages());
    }

    render() {
        const {images} = this.props;
        return (<Main images={images}/>);
    }
}

Home.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {images: state.home.images};
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(homeActions, dispatch),
        dispatch: dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);