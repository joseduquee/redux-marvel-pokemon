import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
import { marvelApi } from './api/marvelApi';

export const PokemonApp = () => {
  
    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page } = useSelector( state => state.pokemon );
    
    useEffect(() => {
        dispatch( getPokemons() )
    }, [])
  
    return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading ? 'True': 'False' }</span>

      <ul>
        {
            //return implicito con ()
            pokemons.map( ({ name }) => (
                <li key={name }>{ name }</li>
            ))
        }
      </ul>

      <button 
        disabled={ isLoading }
        onClick={ () => dispatch( getPokemons(page -= 1) )}
        className="ms-1"
       >
        Back
      </button>
      

      <button 
        disabled={ isLoading }
        onClick={ () => dispatch( getPokemons(page) )}
        className="ms-1"
       >
        Next
      </button>
    </>
  );
};
