describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://rozetka.com.ua/");
    const input = cy.get("input");
    input.type("Миши");
    const searchResult = cy.get("ul[class*='search'] > li > a");
    searchResult.click();
  });
});
