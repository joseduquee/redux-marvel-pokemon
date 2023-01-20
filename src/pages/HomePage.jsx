import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components/Loading";
import { getCharacterByName, getCharacters } from "../store/slices/marvel/thunks";

export const HomePage = () => {
  
    const dispatch = useDispatch();
    let { isLoading, personajes = [], page, total } = useSelector( state => state.marvel );

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    const prevPage = () => {
        if( page > 1 ){
            dispatch( getCharacters(page -= 2))
        }
    }

    const onSearchEvent = ({ target }) => {
        dispatch( getCharacterByName( target.value ) )
    }

    return (
    <>
        <h1>Listado de personajes</h1>
        <hr/>

        <input 
            type="text"
            className="mb-4 form-control"
            placeholder="Buscar personaje"
            onChange={ onSearchEvent }
        />

        <button 
            className="btn btn-primary me-1"
            onClick={ prevPage }
        >
            Back
        </button>
        <button className="btn btn-secondary me-1">
            Page: { page }
        </button>
        <button 
            className="btn btn-primary me-4"
            onClick={ () => dispatch( getCharacters(page)) }
        >
            Next
        </button>

        <button className="btn btn-secondary">
            Total: { total }
        </button>


        <table className='table'>
            <thead>
                <tr>
                    <th style={{ width: 200 }}>Id</th>
                    <th style={{ width: 250 }}>Nombre</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    personajes.map( ({ id, name, image}) => (
                        <tr key={ id }>
                            <td>{ id }</td>
                            <td>{ name }</td>
                            <td>
                                <img
                                    className="img-cont"
                                    src={ image }
                                    alt={ name }
                                />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {
            isLoading && <Loading />
        }
    </>
  )
}
