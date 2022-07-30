import { Button } from "./Button";

describe('Button', () => {
  it('should render', () => {
    cy.mount(<Button/>)
    cy.findByRole('button').should('be.visible')
  })
})
