import axios from 'axios';

const initialState = {
    
    challengeData: {}
}

const FETCH_DATA = 'FETCH_DATA'

export function fetchData( getData ) {
    let promise = axios.get( '/api/teamvteam', getData )
    .then( res => res.data )
    return {
        type: FETCH_DATA,
        payload: promise
    }
}

export default function reducer ( state = initialState, action ) {
    switch ( action.type ) {
        case FETCH_DATA + '_FULFILLED':
            return Object.assign( {}, state, { challengeData: action.payload } )
        default: 
            return state;
    }
}