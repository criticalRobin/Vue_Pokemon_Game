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

  test("debe mostrar los componentes de PokemonPicture y PokemonOptions", () => {
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
    const picture = wrapper.find("pokemon-picture-stub");
    const options = wrapper.find("pokemon-options-stub");

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();
    expect(picture.attributes("pokemonid")).toBe("1");
    expect(options.attributes("pokemonsarr")).toBeTruthy();
  });

  test("pruebas con checkAnswer", async () => {
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
    const pokemonName = pokemonsArr[0].name;

    await wrapper.vm.checkAnswer(1);

    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.find("h2").text()).toBe(`Correcto! Es ${pokemonName}`);
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.vm.showAnswer).toBeTruthy();

    await wrapper.vm.checkAnswer(10);

    expect(wrapper.vm.message).toBe(`Incorrecto! Era ${pokemonName}`);
    expect(wrapper.vm.lives.length).toBe(2);
    expect(wrapper.vm.gameOver).toBeFalsy();

    await wrapper.vm.checkAnswer(10);
    await wrapper.vm.checkAnswer(10);
    
    expect(wrapper.vm.lives.length).toBe(0);
    expect(wrapper.vm.gameOver).toBeTruthy();
  });
});
