import { getPokemons } from "@/helpers/getPokemonOptions";

describe("getPokemonOptions helpers", () => {
  test("getPokemons debe retornar un arreglo de números", () => {
    const pokemons = getPokemons();

    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[100]).toBe(101);
    expect(pokemons[649]).toBe(650);
  });
});
