import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage.vue";

describe("pruebas unitarias del componente PokemonPage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("debe llamar al getPokemons al montar", () => {
    const getPokemonsSpy = jest.spyOn(PokemonPage.methods, "getPokemons");
    shallowMount(PokemonPage);

    expect(getPokemonsSpy).toHaveBeenCalled();
  });
});
