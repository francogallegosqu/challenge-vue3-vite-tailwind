<template>
  <main>
    <Item :characters="getCharacters" />
  </main>
</template>

<script>
import Item from "../components/Item.vue";
import { mapState } from "pinia";
import { useCharacterStore } from "../stores/character";
export default {
  components: {
    Item,
  },
  computed: {
    ...mapState(useCharacterStore, ["getCharacters"]),
  },
};
</script>
