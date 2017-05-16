import { handleActions } from 'redux-actions';

const favorite = handleActions({
    SHOWIMAGES: (state, action) => ({
        ...state, images: action.payload
    })
}, { images: [] });

export default favorite;