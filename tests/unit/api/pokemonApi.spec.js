import pokemonApi from "@/api/pokemonApi";

describe("pokemonApi", () => {
  test("axios debe estar configurado correctamente con el api de pokememon", () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
