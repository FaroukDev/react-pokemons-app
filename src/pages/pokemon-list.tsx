import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "../models/pokemon";
import PokemonCard from "../components/pokemon-card";
import PokemonService from "../services/pokemon-service";




const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
    }, []);

    return (
    <div className="containerList">
        <h5 className="center" style={{color:'#009688'}}>Bienvenue sur le Pokédex !</h5>
        <div className="container">
        <div className="row">
            {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
             ))}
        </div>  
        </div>  
    </div>
    );  
};

export default PokemonList;
