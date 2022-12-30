<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.png"
      width="225"
      height="225"
    />

    <div class="wrapper flex">
      <select
        id="status"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="status"
      >
        <option selected>Status</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
      <div class="relative pl-10">
        <input
          type="search"
          id="search"
          class="block w-full pr-10 p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar personaje"
          v-model="name"
          required
        />
        <button
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="load()"
        >
          Search
        </button>
      </div>
    </div>
    <div
      class="p-4 mt-4 mb-4 text-sm text-red-700 bg-red-100 rounded-md dark:bg-red-200 dark:text-red-800"
      role="alert"
      style="max-width: 300px"
      v-if="error != ''"
    >
      <span class="font-medium"> {{ error }}</span>
    </div>
  </header>
  <RouterView />
</template>
<script>
import { mapActions } from "pinia";
import { useCharacterStore } from "./stores/character";

export default {
  data() {
    return {
      name: "",
      status: "",
      error: "",
    };
  },
  methods: {
    ...mapActions(useCharacterStore, ["loadCharacters"]),
    async load() {
      if (this.checkForm()) {
        this.loadCharacters(this.name, this.status);
      }
    },
    checkForm() {
      console.log("[length]", this.name.length);
      if (
        this.status == "" ||
        this.name == "" ||
        this.name.length < 4 ||
        this.name.length > 20
      ) {
        this.error = "rellena los campos correctamente!";
        return false;
      }
      this.error = "";
      return true;
    },
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
header .wrapper {
  max-width: 600px;
  min-width: 200px;
}
</style>
