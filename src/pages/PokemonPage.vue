<template>
  <div>
    <h1>Quién es este Pokémon?</h1>
    <PokemonPicture />
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>
