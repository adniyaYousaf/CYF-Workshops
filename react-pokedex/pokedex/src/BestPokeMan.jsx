function BestPokeMan(props) {

  return (
    <>
      <p>My favorite Pokemon is Squirtle</p>
      <div>
        <ul>
          {props.ability.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BestPokeMan;
