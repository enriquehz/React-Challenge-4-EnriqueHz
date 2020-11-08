import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

let randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

export default function PokeNameValidator() {
  /**
   * Component logic goes here
   */

  //console.log(randomPokemon);
  const [pokeName, setName] = useState("");
  //console.log(pokeName);

  if (randomPokemon.toLowerCase() === pokeName.toLowerCase()) {
    alert("✔️✔️Correct!!!✔️✔️  Do you want to play again?");
    randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    document.getElementById("pokeInput").value = "";
    //location.reload();
  }

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{randomPokemon}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        id="pokeInput"
        type="text"
        placeholder="Enter the Pokémon name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </div>
  );
}
