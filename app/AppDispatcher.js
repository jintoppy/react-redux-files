import {Dispatcher} from 'flux';

const flux = new Dispatcher();

export const dispatch = (action) => {
    flux.dispatch(action);
};

export const register = (callback) => {
    flux.register(callback);
};