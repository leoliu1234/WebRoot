import { handleActions } from 'redux-actions';

const home = handleActions({
    INCREMENT: (state, action) => ({
        ...state, counter: state.counter + action.payload
    }),
    DECREMENT: (state, action) => ({
        ...state, counter: state.counter - action.payload
    }),
    SHOWIMAGES: (state, action) => ({
        ...state, images: action.payload
    })
}, { counter: 0, images: [] });

export default home;