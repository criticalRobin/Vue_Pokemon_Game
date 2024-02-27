import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture.vue";

describe("pruebas unitarias del componente PokemonPicture", () => {
  test("debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 1, showPokemon: false },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
  test("debe de mostrar la imágen oculta y el pókemon 100", () => {});
  test("debe de mostrar el pókemon si showPokemon:true", () => {});
});
