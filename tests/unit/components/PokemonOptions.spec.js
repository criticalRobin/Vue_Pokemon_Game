import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";

describe("pruebas unitarias componente PokemonOptions", () => {
  test("debe hacer match con el snapshot", () => {
    const wrapper = shallowMount(PokemonOptions, {
      props: { pokemonsArr: [] },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
