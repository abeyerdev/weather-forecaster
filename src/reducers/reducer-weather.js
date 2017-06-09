import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

    switch(action.type) {
        // At this point, action is our response object
        // and we only really care about the data object within.
        // Since we don't want to overwrite existing weather info (state),
        // we add to our state.
        case FETCH_WEATHER :   
            // return a new array, not a manipulated existing state!         
            return state.concat([action.payload.data]); 
            // could also do this with spread operator to explicity create a new array:
            // return [action.payload.data, ...state];
    }
    
    return state;
}