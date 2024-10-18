// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(100);
    expect(account.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(50);
    expect(() => account.withdraw(100)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account1 = getBankAccount(50);
    const account2 = getBankAccount(10);
    expect(() => account1.transfer(100, account2)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(50);
    expect(() => account.transfer(10, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const account = getBankAccount(50);
    account.deposit(50);
    expect(account.getBalance()).toBe(100);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(100);
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test('should transfer money', () => {
    const account1 = getBankAccount(50);
    const account2 = getBankAccount(0);
    account1.transfer(50, account2);
    expect(account2.getBalance()).toBe(50);
    expect(account1.getBalance()).toBe(0);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(100);
    const balance = await account.fetchBalance();
    if (balance !== null) {
      expect(balance).toBeGreaterThanOrEqual(0);
      expect(balance).toBeLessThanOrEqual(100);
    }
  });

  test('should set new balance if synchronizeBalance returned number', async () => {
    const account = getBankAccount(100);
    const newBalance = 150;
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(newBalance);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(newBalance);
  });

  test('should throw SynchronizationFailedError if synchronizeBalance returned null', async () => {
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);
    await expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
