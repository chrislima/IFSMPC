describe('Página de Inscrição do SUAP', () => {
  const url = 'https://suap.ifsuldeminas.edu.br/eventos/inscricao/13142/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('deve carregar a página corretamente', () => {
    cy.url().should('include', '/eventos/inscricao/13142');
    cy.title().should('not.be.empty');
  });

  it('deve exibir o título do evento', () => {
    cy.get('.title-container > h2').should('contain.text', '6° Semana da Engenharia - WeekEng');
    
  });

  it('deve conter o botão de inscrição', () => {
    cy.contains('button, a', /Inscrever-se|Realizar inscrição/i).should('exist');
  });

  it('deve conter um formulário (se aplicável)', () => {
    cy.get('form').should('exist');
  });

  it('deve simular envio do formulário', () => {
    cy.get('form').within(() => {
      cy.get('button[type="submit"], input[type="submit"]').click();
    });
    // Aqui você pode validar a resposta da submissão
    cy.url().should('include', '/eventos/inscricao');

    cy.get('.errornote').should('contain.text', 'Por favor corrija os erros abaixo.');
  });
});
