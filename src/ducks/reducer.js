import axios from 'axios';

const initialState = {
    
    challengeDataTVT: {},

    challengeDataAVA: {},

    photoUpload: {},

    standings: {},

    users: []
}

// TVT = teamvteam
// AVA = agentvagent

const FETCH_TVT_DATA = 'FETCH_TVT_DATA'
const FETCH_AVA_DATA = 'FETCH_AVA_DATA'
const UPLOAD_PHOTO = 'UPLOAD_PHOTO'
const GET_STANDINGS = 'GET_STANDINGS'
const FETCH_USERS = 'FETCH_USERS'

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

export function getStandings ( standings ) {
    return {
        type: GET_STANDINGS,
        payload: standings
    }
}

export function fetchUsers() {
    return async function (dispatch) {
        const promise = await axios.get('/api/viewmore')
        const newPromise = promise.data.map( ( e, i ) => {
                    let standingsObj = eval('(' + e.standings + ')')
                    return {
                        userId: e.user_id,
                        name: e.user_name,
                        team: e.team,
                        kpi: e.kpi,
                        standings: standingsObj[e.user_id]
                    }
                })
        dispatch({
            type: FETCH_USERS,
            payload: newPromise
        })
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
            return Object.assign( {}, state, { standings: action.payload } )
        case FETCH_USERS:
            return Object.assign( {}, state, { users: action.payload } )
        default: 
            return state;
    }
}