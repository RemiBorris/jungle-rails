describe('template spec', () =>{
  it('successfully visits site', () => {
    cy.visit('/');
  });

  it("There is products on the page", () => {
    cy.visit("/");
    cy.get(".products article").should("be.visible");
  });

  it("Should add item to cart and confirm the cart item has increased", () =>{
    cy.visit("/");
    cy.get('.end-0 > .nav-link')
      .should('contain.text', '0');

    cy.get(':nth-child(1) > div > .button_to > .btn > .fa')
      .click({ force: true });

    cy.get('.end-0 > .nav-link')
      .should('contain.text', '1');
  });
});