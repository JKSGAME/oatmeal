import axios from 'axios';

const initialState = {
    
    challengeDataTVT: {
        team: '',
        user: '',
        challenges: ''
    },

    challengeDataAVA: {},

    photoUpload: {},

    standings: {}
}

// TVT = teamvteam
// AVA = agentvagent

const FETCH_TVT_DATA = 'FETCH_TVT_DATA'
const FETCH_AVA_DATA = 'FETCH_AVA_DATA'
const UPLOAD_PHOTO = 'UPLOAD_PHOTO'
const GET_STANDINGS = 'GET_STANDINGS'

export function fetchAVAData( getData ) {
    let promise = axios.get( '/api/agentvagent', getData )
    .then( res => res.data )
    return {
        type: FETCH_AVA_DATA, 
        payload: promise
    }
}

export function fetchTVTData( getData ) {
    let promise = axios.get( '/api/teamvteam', getData )
    .then( res => res.data )
    return {
        type: FETCH_TVT_DATA,
        payload: promise
    }
}

export function photoUpload( photoData ) {
    return {
        type: UPLOAD_PHOTO,
        payload: photoData
    }
}

export function getStandings ( standings ){
    return {
        type: GET_STANDINGS,
        payload: standings
    }
}
export default function reducer ( state = initialState, action ) {
    switch ( action.type ) {
        case FETCH_AVA_DATA + '_FULFILLED':
            return Object.assign( {}, state, { challengeDataAVA: action.payload } )
        case FETCH_TVT_DATA + '_FULFILLED':
            return Object.assign( {}, state, { challengeDataTVT: action.payload } )
        case UPLOAD_PHOTO: 
            return Object.assign( {}, state, { photoUPload: action.payload } )
        case GET_STANDINGS:
            return Object.assign( {}, state, { standings: action.payload })
        default: 
            return state;
    }
}