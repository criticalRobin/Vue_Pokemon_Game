<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>Quién es este Pokémon?</h1>
    <Lives :lives="lives" />
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemonsArr="pokemonsArr"
      @selection="checkAnswer($event)"
    />
  </div>

  <div v-if="showAnswer">
    <h2>{{ message }}</h2>
    <div>
      <button v-if="gameOver" @click="newGame">Nuevo Juego</button>
      <button v-else @click="continueGame">Continuar</button>
    </div>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import Lives from "@/components/Lives.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
    Lives,
  },
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      lives: [1, 2, 3],
      gameOver: false,
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
        : (this.message = `Incorrecto! Era ${this.pokemon.name}`) &&
          this.lives.pop();

      if (this.lives.length === 0) this.gameOver = true;
    },
    resetData() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
      this.gameOver = false;
      this.getPokemons();
    },
    continueGame() {
      this.resetData();
    },
    newGame() {
      this.resetData();
      this.lives = [1, 2, 3];
    },
  },
  mounted() {
    this.getPokemons();
  },
};
</script>
