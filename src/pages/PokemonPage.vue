<template>
  <div>
    <h1>Quién es este Pokémon?</h1>
    <PokemonPicture :pokemonId="3" :showPokemon="true" />
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

getPokemonOptions();

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>
