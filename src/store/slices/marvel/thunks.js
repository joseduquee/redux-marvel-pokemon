import { async } from 'q';
import { endUrl, marvelApi } from '../../../api/marvelApi';
import { startLoading, setPersonajes } from './marvelSlice';

export const getCharacters = ( page = 0 ) => {
    return async(dispatch, getState) => {
        
        dispatch( startLoading() );

        const { data } = await marvelApi.get(`characters?limit=10&offset=${ page * 50 }${ endUrl }`);

        const personajesMap = data.data.results.map( val => {
            return {
                id: val.id,
                name: val.name,
                description: val.description,
                image: `${ val.thumbnail.path }.${ val.thumbnail.extension}`
            }
        })

        dispatch( setPersonajes({
            personajes: personajesMap,
            page: page + 1,
            total: data.data.total
        }))
    }
}

export const getCharacterByName = ( value, page = 0 ) => {
    return async(dispatch) => {
        
        dispatch( startLoading() );

        const { data } = await marvelApi.get(`characters?name=${ value }limit=10&offset=${ page * 50 }${ endUrl }`);

        const personajesMap = data.data.results.map( val => {
            return {
                id: val.id,
                name: val.name,
                description: val.description,
                image: `${ val.thumbnail.path }.${ val.thumbnail.extension}`
            }
        })

        dispatch( setPersonajes({
            personajes: personajesMap,
            page: page + 1,
            total: data.data.total
        }))
    }
}