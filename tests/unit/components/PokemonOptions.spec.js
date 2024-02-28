import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { pokemonsArr } from "../mocks/pokemons.mock";

describe("pruebas unitarias componente PokemonOptions", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemonsArr,
      },
    });
  });

  test("debe hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de mostrar las 4 opciones correctamente", () => {
    const liElements = wrapper.findAll("li");

    expect(liElements.length).toBe(4);
    expect(liElements[0].text()).toBe("bulbasaur");
    expect(liElements[1].text()).toBe("ivysaur");
    expect(liElements[2].text()).toBe("venusaur");
    expect(liElements[3].text()).toBe("charmander");
  });
});
