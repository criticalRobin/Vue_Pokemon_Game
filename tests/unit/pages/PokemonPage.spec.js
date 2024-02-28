import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage.vue";
import { pokemonsArr } from "../mocks/pokemons.mock";

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

  test("debe hacer match con el snapchot cuando cargan los pokemon", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr,
          pokemon: pokemonsArr[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          lives: [1, 2, 3],
          gameOver: false,
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
