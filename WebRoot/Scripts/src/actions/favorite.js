import { createActions } from 'redux-actions';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

// export const increment = createAction('INCREMENT', amount => amount);

export const { showimages } = createActions({
    SHOWIMAGES: images => images
});

export const fetchImages = () => {
    return dispatch => {
        fetch("/Assets/favoriteImage.json")
            .then(response => response.json())
            .then(json => {
                dispatch(showimages(json));
            });
    };
}