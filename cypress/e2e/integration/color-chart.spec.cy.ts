import { ColorCard } from 'src/domain/ColorCard'
/// <reference types="cypress" />

describe('The Good Ending', () => {
    const colorCard = new ColorCard(0, 999, 'C', "234")
    beforeEach(() => {
        cy.visit('/')
    })

    it('Creates a new color card', () => {
      cy.get('[data-testid="add-button"]').click()
      cy.get('[data-testid="form_hexaColor"]').type(colorCard.hexaColor)
      cy.get('[data-testid="form_texture"]').select(colorCard.type)
      cy.get('[data-testid="form_colorCode"]').type(colorCard.code.toString())
      cy.get('[data-testid="form_submit"]').click()

      cy.get(`[data-testid="color-card__${colorCard.code}"]`).should('exist')
    })

    it('Searchs the existing color card and updates it', () => {
        colorCard.hexaColor = "50F0"
        cy.get(`[data-testid="color-card__${colorCard.code}"]`).as('card')

        cy.get('@card').find('[data-testid="options-btn"]').click()

        cy.get('@card').find('[data-testid="edit-btn"]').click()

        cy.get('[data-testid="form_hexaColor"]').as('hexaInput')
        cy.get('@hexaInput').clear()
        cy.get('@hexaInput').type(colorCard.hexaColor)

        cy.get('[data-testid="form_submit"]').click()
    })

    it('Searchs the existing color card and updates it', () => {
        cy.get(`[data-testid="color-card__${colorCard.code}"]`).as('card')

        cy.get('@card').find('[data-testid="options-btn"]').click()

        cy.get('@card').find('[data-testid="delete-btn"]').click()

        cy.get('@card').should('not.exist')
    })
  })
  