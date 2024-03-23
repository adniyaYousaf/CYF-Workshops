import { useState } from "react";

function CaughtPokemon(date) {
  const [caught, catchPokemon] = useState([]);
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {date.date}
      </p>
      <button onClick={() => catchPokemon(caught.concat("test"))}>
        Click Me
      </button>

      <ul>
        {caught.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default CaughtPokemon;
