const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const config = require('config');

describe('Auth', () => {
  beforeEach(async () => {
    await LoginPage.open();
  });
  context('basic user @smoke', () => {
    it('should login with valid credentials', async () => {
      await LoginPage.login(
        config.users.standard.user,
        config.users.standard.pass
      );
      await expect(InventoryPage.secondaryTitle).toHaveTextContaining(
        'Products'
      );
    });
    it('should not login with invalid credentials', async () => {
      await LoginPage.login(config.users.standard.user, 'a_wrong_password');
      await expect(LoginPage.errorMessageText).toHaveTextContaining(
        'Username and password do not match any user in this service'
      );
    });
  });
  context('locked out user', () => {
    it('should login with valid credentials but locked out', async () => {
      await LoginPage.login(config.users.locked.user, config.users.locked.pass);
      await expect(LoginPage.errorMessageText).toHaveTextContaining(
        'Sorry, this user has been locked out'
      );
    });
    it('should not login with invalid credentials', async () => {
      await LoginPage.login(config.users.locked.user, 'a_wrong_password');
      await expect(LoginPage.errorMessageText).toHaveTextContaining(
        'Username and password do not match any user in this service'
      );
    });
  });
  context('problem user', () => {
    it('should login with valid credentials but locked out', async () => {
      await LoginPage.login(
        config.users.problem.user,
        config.users.problem.pass
      );
      await expect(InventoryPage.secondaryTitle).toHaveTextContaining(
        'Products'
      );
    });
    it('should not login with invalid credentials', async () => {
      await LoginPage.login(config.users.problem.user, 'a_wrong_password');
      await expect(LoginPage.errorMessageText).toHaveTextContaining(
        'Username and password do not match any user in this service'
      );
    });
  });
  context('performance issue user', () => {
    it('should login with valid credentials', async () => {
      await LoginPage.login(
        config.users.performance_problem.user,
        config.users.performance_problem.pass
      );
      await expect(InventoryPage.secondaryTitle).toHaveTextContaining(
        'Products'
      );
    });
    it('should not login with invalid credentials', async () => {
      await LoginPage.login(
        config.users.performance_problem.user,
        'a_wrong_password'
      );
      await expect(LoginPage.errorMessageText).toHaveTextContaining(
        'Username and password do not match any user in this service'
      );
    });
  });
});
