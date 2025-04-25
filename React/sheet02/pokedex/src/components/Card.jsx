import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Card({ name }) {
  const [pokeData, setPokeData] = useState(null);
  const [evoStage, setEvoStage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try 
			{
        setLoading(true);
        setError(null);
        
        const [pokemonRes, speciesRes] = await Promise.all([
          fetch(`https://pokeapi.co/api/v2/pokemon/${name}`),
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
        ]);
        
        if (!pokemonRes.ok || !speciesRes.ok) {
          throw new Error('Failed to fetch Pokémon data');
        }
        
        const pokemonData = await pokemonRes.json();
        const speciesData = await speciesRes.json();
        
        setPokeData(pokemonData);
        const evoData = await findEvoChain(speciesData.evolution_chain.url, name);
        setEvoStage(evoData);
      } 
			catch (error) 
			{
        console.error('Error loading card', error);
        setError(error.message);
      }
			finally 
			{
        setLoading(false);
      }
    };
    
    fetchData();
  }, [name]);

  if (error) return <div className="error">Error: {error}</div>;
  if (loading || !pokeData) return <div className="loading">Loading...</div>;

  const types = pokeData.types.map(t => t.type.name);
	console.log("Pokemon types:", types);

  return (
    <div className="card">
      <div className="pokemon">
        <img 
          src={pokeData.sprites?.front_default || '/placeholder.png'} 
          alt={name} 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = '/placeholder.png';
          }}
        />
        <div className="id">ID / {pokeData.id}</div>
      </div>
      <div className="info2">
        <div className="name">{capitalize(name)}</div>
        <div className="type">
          {types.map((type) => (
            <span key={type} className={`type-${type}`}>
              {type.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="evolution">
          <div className="main-text">{evoStage}</div>
        </div>
      </div>
    </div>
  );
}

async function findEvoChain(url, currentName) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch evolution chain');
    const data = await response.json();
    
    const {chain} = data;
    
    if (currentName == chain.species.name)
      return "First phase";
    
    if (chain.evolves_to.length > 0) 
		{
      const firstEvolution = chain.evolves_to[0];
      
      if (currentName === firstEvolution.species.name)
        return `Evolves from: ${capitalize(chain.species.name)}`;
      
      if (firstEvolution.evolves_to.length > 0) 
			{
        const secondEvolution = firstEvolution.evolves_to[0];
        if (currentName === secondEvolution.species.name)
          return `Evolves from: ${capitalize(firstEvolution.species.name)}`;
      }
    }
    
    return "Unknown evolution stage";
  } 
	catch (error) 
	{
    console.error("Error finding evolution", error);
    return "Evolution data unavailable";
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;