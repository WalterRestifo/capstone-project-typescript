export {};

const testSkill = "A";
const testGender = "Male";
const testLanguage = "English";
const username = "cytest";

describe("functional tests for the homepage", () => {
  const HomePage = {
    visit: () => cy.visit("http://localhost:3000"),
    selectionForm: () => cy.get('[data-cy="selection-form"]'),
    skillFilterSelect: () =>
      cy.get('[data-cy="skill-select"]').select(testSkill),
    genderFilterSelect: () =>
      cy.get('[data-cy="gender-select"]').select(testGender),
    languageFilterSelect: () =>
      cy
        .get('[data-cy="language-select"]')
        .select(testLanguage, { force: true }),
    playerList: () => cy.get('[data-cy="player-list"]'),
    addPlayer: (username: string) => {
      cy.get('[data-cy="newUserForm-navigation"]').click();
      cy.wait(1000);
      cy.get('[data-cy="username-input"]').type(username);
      cy.get('[data-cy="skill-select-new-user"]').select(testSkill);
      cy.get('[data-cy="gender-select-new-user"]').select(testGender);
      cy.get('[value="English"]').click();
      cy.get('[data-cy="submit-newUserForm"]').click();
    },
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.viewport(375, 667);
  });

  it("loads the home page", () => {
    HomePage.visit();
  });

  it("checks if the selection form exists", () => {
    HomePage.selectionForm().should("exist");
  });

  it("creates a new player and checks if it is in the new list of all the players", () => {
    HomePage.addPlayer(username);
    cy.wait(1000);
    cy.get('[data-cy="new-user-form-main-element"]').should(
      "contain",
      "Your profile was created successfully!"
    );
    cy.get('[data-cy="back-to-homepage-navigation"]').click();
    cy.wait(1000);

    HomePage.playerList().should("be.visible");
    HomePage.playerList().should("contain", username);
  });

  it("checks if the filters work", () => {
    HomePage.playerList()
      .children()
      .its("length")
      .then((number) => {
        HomePage.skillFilterSelect();
        HomePage.genderFilterSelect();
        HomePage.languageFilterSelect();
        HomePage.playerList().children().its("length").should("be.lt", number);
        HomePage.playerList().should("contain", username);
      });
  });

  it("removes the player from the list", () => {
    HomePage.playerList()
      .children()
      .its("length")
      .then((number) => {
        cy.get('[data-cy="delete-user-button"]').last().click({ force: true });
        cy.wait(1000);
        cy.reload();
        cy.wait(1000);
        HomePage.playerList().children().its("length").should("be.lt", number);
        HomePage.playerList().should("not.contain", username);
      });
  });
});
