import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = await data.json();

  return {
    props: {
      pokemons: pokemons,
    },
  };
};
