export {};

describe("functional tests for the game page", () => {
  const GamePage = {
    visit: () => {
      cy.visit("http://localhost:3000/games");
    },
    matchList: () => cy.get('[data-cy="match-list"]'),
  };

  beforeEach(() => {
    GamePage.visit();
    cy.viewport(375, 667);
  });

  it("loads the home page", () => {
    GamePage.visit();
  });

  it("checks if the list of the matches exists", () => {
    GamePage.matchList().should("exist");
  });

  //it needs to have a match in the list, otherwise it will fail because it will not find any children of the list
  it("creates a new match and checks if it is in the new list of all the matches", () => {
    GamePage.matchList()
      .children()
      .its("length")
      .then((number) => {
        cy.get('[data-cy="teamChoice-navigation"]').click();
        cy.wait(500);
        cy.get('[data-cy="team-list"]').children().first().click();
        cy.get('[data-cy="add-to-team-1-button"]').click();
        cy.get('[data-cy="team-list"]').children().last().click();
        cy.get('[data-cy="add-to-team-2-button"]').last().click();
        cy.get('[data-cy="scoreForm-navigation"]').click();

        cy.wait(500);
        cy.get('[data-cy="team-1-wrapper"]')
          .children()
          .should("have.length", 5);
        cy.get('[data-cy="team-2-wrapper"]')
          .children()
          .should("have.length", 5);

        cy.get('[data-cy="team-1-score-input"]').type("21");
        cy.get('[data-cy="team-2-score-input"]').type("10");
        cy.get('[data-cy="submit-scoreForm"]').click();
        cy.get('[data-cy="submit-scoreForm"]').should("not.exist");
        cy.get('[data-cy="back-to-games-page-navigation"]').click();

        cy.wait(500);
        GamePage.matchList()
          .children()
          .should("have.length", number + 1);
      });
  });

  it("removes the new created match", () => {
    GamePage.matchList().should("be.visible");
    GamePage.matchList()
      .children()
      .its("length")
      .then((number) => {
        cy.get('[data-cy="delete-match-button"]').last().click();
        cy.wait(500);
        GamePage.matchList()
          .children()
          .its("length")
          .should("equal", number - 1);
      });
  });
});
