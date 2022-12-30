import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Item from "../Item.vue";

describe("Item", () => {
  it("renders properly", () => {
    const characters = [
      {
        name: "Rick Snachez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        name: "Rick Snachez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
    ];
    const wrapper = mount(Item, { props: { characters } });
    expect(wrapper.text()).toContain("Results :");
  });
});
