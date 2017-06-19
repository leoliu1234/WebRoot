import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as DashboardActions from '../actions/dashboard';

class App extends React.Component {
    componentDidMount() {
        const {dispatch, decrement} = this.props;
    }
    render() {
        const {increment, counter, decrement, getThenShow} = this.props;
        return (
            <div id="main">
                <div className="content">
                    <img src="/Assets/images/src_1.jpg"/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    getThenShow: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {counter: state.dashboard.counter};
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(DashboardActions, dispatch),
        dispatch: dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);