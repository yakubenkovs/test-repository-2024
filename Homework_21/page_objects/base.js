class Base {

    constructor() {}

    navigate(url) {
      cy.visit(url);
    }
  }
  
  module.exports = {Base}