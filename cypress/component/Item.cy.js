import { expect } from "chai"
import Item from "../../src/components/Item.vue";

describe('Item.cy.js', () => {
  it('playground', () => {
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
    cy.mount(Item, { props: { characters } })
    cy.get('.shadow-md').each((h2) => {
      cy.wrap(h2).contains('h2','Rick Snachez')
    })
  })
})