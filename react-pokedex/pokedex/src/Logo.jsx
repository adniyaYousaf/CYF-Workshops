function Logo(props) {
  return (
    <header>
      <h1>Welcome to my first react App</h1>
      <h2>{props.appName}</h2>
      <img onClick={props.logWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"/>
    </header>
  );
}


export default Logo ;
