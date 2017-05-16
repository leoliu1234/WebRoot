import { handleActions } from 'redux-actions';

// const initializeState = {};
// export default function dashboard(state = initializeState, action) {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }


const dashboard = handleActions({
    INCREMENT: (state, action) => ({
        ...state, counter: state.counter + action.payload
    }),
    DECREMENT: (state, action) => ({
        ...state, counter: state.counter - action.payload
    })
}, { counter: 0 });

export default dashboard;