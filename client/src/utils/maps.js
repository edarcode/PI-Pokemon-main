import Card from "../components/Card/Card";

export const renderPokemons = (allPokemons) => {
  return (
    <section className="containerCards">
      {allPokemons.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.img}
          types={item.types}
        />
      ))}
    </section>
  );
};
export const renderTypes = (types) => {
  return (
    <section>
      types:
      {types.map((item, i) => {
        if (i === types.length - 1) {
          return <span key={item}> {item}. </span>;
        }
        return <span key={item}> {item}, </span>;
      })}
    </section>
  );
};
export const renderOnePokemon = (pokemon) => {
  const { id, name, img, types } = pokemon;
  return <Card key={id} id={id} name={name} img={img} types={types} />;
};
