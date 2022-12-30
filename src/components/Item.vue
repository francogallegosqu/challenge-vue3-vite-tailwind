<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Results :</h1>
    <div class="grid grid-cols-3 gap-4">
      <div
        class="flex shadow-md rounded block"
        style="max-width: 600px"
        v-for="character in characters"
        :key="character.id"
      >
        <img
          :src="character.image"
          class="w-1/2 rounded block bg-cover"
          :alt="character"
        />
        <div class="container mx-auto px-4">
          <h2>{{ character.name }}</h2>
          <h3>{{ character.status }} - {{ character.species }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    characters: {
      type: Array,
    },
  },
};
</script>
