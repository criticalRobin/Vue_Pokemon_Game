import getPokemonOptions, {
  getPokemons,
  getPokemonNames,
} from "@/helpers/getPokemonOptions";

describe("getPokemonOptions helpers", () => {
  test("getPokemons debe retornar un arreglo de números", () => {
    const pokemons = getPokemons();

    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[100]).toBe(101);
    expect(pokemons[649]).toBe(650);
  });

  test("debe retornar un arreglo de 4 elementos con nombres de pokemons", async () => {
    const pokemonNames = await getPokemonNames([1, 2, 3, 4]);

    expect(pokemonNames[0].name).toBe("bulbasaur");
    expect(pokemonNames[1].name).toBe("ivysaur");
    expect(pokemonNames[2].name).toBe("venusaur");
    expect(pokemonNames[3].name).toBe("charmander");
  });

  test("getPokemonOptions debe retornar un arreglo mezclado", async () => {
    const pokemons = await getPokemonOptions();

    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
  });
});
