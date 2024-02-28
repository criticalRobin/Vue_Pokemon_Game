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

  test("debe emitir selection con sus respectivos parámetros al hacer click", () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");

    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");

    expect(wrapper.emitted("selection").length).toBe(4);
    expect(wrapper.emitted("selection")[0]).toStrictEqual([1]);
    expect(wrapper.emitted("selection")[1]).toStrictEqual([2]);
    expect(wrapper.emitted("selection")[2]).toStrictEqual([3]);
    expect(wrapper.emitted("selection")[3]).toStrictEqual([4]);
  });
});
