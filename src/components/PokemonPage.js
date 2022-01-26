import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(r=>r.json())
    .then(data=>setPokemonList(data))
  }, [])


  const filteredPokemon = pokemonList.filter((pokemon)=>{
    if(searchTerm===""){
      return true
    }else{
      return pokemon.name.toLowerCase().includes(searchTerm)
    }
  })

  function handleAddPokemon(newPokemon){
    const newPokemonList = [...pokemonList, newPokemon]
    setPokemonList(newPokemonList)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm}/>
      <br />
      <PokemonCollection pokemonList={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
