import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture.vue";

describe("pruebas unitarias del componente PokemonPicture", () => {
  test("debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 1, showPokemon: false },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
  test("debe de mostrar la imágen oculta y el pókemon 100", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 100, showPokemon: false },
    });
    const [img1, img2] = wrapper.findAll("img");

    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);
    expect(img1.classes("hidden-pokemon")).toBeTruthy();
    expect(wrapper.props().pokemonId).toBe(100);
    expect(wrapper.props().showPokemon).toBeFalsy();
  });
  test("debe de mostrar el pókemon si showPokemon:true", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 100, showPokemon: true },
    });

    const [img1, img2] = wrapper.findAll("img");

    expect(img2.exists).toBeTruthy();
    expect(img2.classes("fade-in")).toBeTruthy();
    expect(wrapper.props().pokemonId).toBe(100);
    expect(wrapper.props().showPokemon).toBeTruthy();
  });
});
