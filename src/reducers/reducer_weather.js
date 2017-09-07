import {FETCH_WEATHER} from '../actions/index';

//redux-promise middleware stops a payload with promise and waits
//thats why this action then contains request response of the promise!
//In other words, the redux-promise 'unwraps' the promise for us and then
//dispatches a new action
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //concat doesn't mutate state
            //return state.concat([ action.payload.data ]);
            return [action.payload.data, ...state ];
    }

    return state;
}