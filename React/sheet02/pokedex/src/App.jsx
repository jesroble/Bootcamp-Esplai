import Card from './components/Card';
import Details from './components/Details';
import React, { useEffect, useState, useCallback } from 'react';
import './App.css';

function App() 
{
  const [pokeList, setPokeList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLoaded, setMaxLoaded] = useState(9);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [error, setError] = useState(null);

  const fetchInitialPokemon = useCallback(async () => {
    try 
    {
      setLoading(true);
      setError(null);
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      if (!response.ok) throw new Error('Failed to fetch Pokémon list');
      const data = await response.json();
      setPokeList(data.results);
      setFiltered(data.results);
    } 
    catch (error) 
    {
      console.error('Error fetching list', error);
      setError(error.message);
    } 
    finally 
    {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInitialPokemon();
  }, [fetchInitialPokemon]);

  useEffect(() => {
    if (search === '') 
      setFiltered(pokeList);
    else 
    {
      const coincidences = pokeList.filter(pokemon => 
        pokemon.name.includes(search.toLowerCase())
      );
      setFiltered(coincidences);
    }
    setMaxLoaded(9);
  }, [search, pokeList]);

  const loadMore = () => {
    setMaxLoaded(prev => prev + 6);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  const handleSelect = (name) => {
    setSelectedPokemon(name);
  };

  const closeDetails = () => {
    selectedPokemon(null);
  };

  if (error) return <div className="error">Error: {error}</div>;
  if (loading) return <div className="loading">Loading Pokémon...</div>;

  return (
    <div className='container'>
      <input 
        type="text" 
        value={search}
        onChange={handleSearch}
        placeholder='Filter Pokémon by name'
      />

      {filtered.length == 0 ? (
        <p className="no-results">No Pokémon found</p>
      ) : (
        <>
          <div className='pokedex' id='pokedex'>
            {filtered.slice(0, maxLoaded).map((pokemon) => (
              <Card 
                key={pokemon.name}
                name={pokemon.name}
                onClick={() => handleSelect(pokemon.name)}
              />
            ))}
          </div>

          {selectedPokemon && (
            <Details 
              key={selectedPokemon}
              onClose={closeDetails}
            />
          )}

          {filtered.length > maxLoaded && (
            <button className='load-more' onClick={loadMore}>
              Load More
            </button>
          )}
        </>
      )}

      <div className="square square-left"></div>
      <div className="square square-right"></div>
      <div className="circle circle-left"></div>
      <div className="circle circle-right"></div>
    </div>
  );
}

export default App;