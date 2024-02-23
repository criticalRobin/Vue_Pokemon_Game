<template>
  <div class="principal-container">
    <h2>{{ lives.length }}</h2>
    <div>
      <ul>
        <li v-for="live in lives" :key="live.id">
          <img src="../assets/heart.jpg" alt="lives" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lives: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.principal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
h2 {
  margin-bottom: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 20px;
  margin-right: 5px;
}
</style>
