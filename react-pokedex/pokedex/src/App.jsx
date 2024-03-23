import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "./Logo";
import BestPokeMan from "./BestPokeMan";
import CaughtPokemon from "./CaughtPokemon";
import PokemonInfo from "./PokemonInfo";
// import PokemonMovesSelector from "./PokemonMovesSelector";

function App() {
  const date = new Date().toLocaleDateString();
  const abb = ["Anticipation", "Adaptability", "Run-Away"];


  return (
    <BrowserRouter>
      <Link to="/BestPokeMan">Best Pokemon</Link>
      <Link to="/CaughtPokemon">Caught Pokemon</Link>
      <Link to="/pokemon/:name">Pokemon Info</Link>

      <Routes>
        <Route element={<BestPokeMan ability={abb} />} path="/BestPokeMan" />
        <Route element={<CaughtPokemon date={date} />} path="/CaughtPokemon" />
        <Route path="/pokemon/:name" element={<PokemonInfo />} />
      </Routes>

      {/* <Logo appName={name} logWhenClicked={logWhenClicked} /> */}

      {/* <PokemonMovesSelector /> */}
    </BrowserRouter>
  );
}

// function logWhenClicked() {
//   console.log("it doesn’t matter what the message is");
// }
export default App;
