import { useParams } from "react-router-dom";

function PokemonInfo() {
    let { name } = useParams();

    return (
      <div>
        <h3>ID: {name}</h3>
      </div>
    );
}

export default PokemonInfo;

