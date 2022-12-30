import { defineStore } from "pinia";
import Api from "../api";
export const useCharacterStore = defineStore("character", {
  state: () => ({ characters: null }),
  getters: {
    getCharacters: (state) => state.characters,
  },
  actions: {
    async loadCharacters(name, status) {
      const { data } = await Api.get(
        `/character/?name=${name}&status=${status}`
      );
      this.characters = data?.results;
    },
  },
});
