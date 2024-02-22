<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>Quién es este Pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemonsArr="pokemonsArr"
      @selection="checkAnswer($event)"
    />
  </div>

  <div v-if="showAnswer">
    <h2>{{ message }}</h2>
    <button @click="newGame">Nuevo Juego</button>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async getPokemons() {
      this.pokemonsArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonsArr[rndInt];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;

      this.pokemon.id === pokemonId
        ? (this.message = `Correcto! Es ${this.pokemon.name}`)
        : (this.message = `Incorrecto! Era ${this.pokemon.name}`);
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
      this.getPokemons();
    },
  },
  mounted() {
    this.getPokemons();
  },
};
</script>
