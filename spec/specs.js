describe("BankAccount", function() {
  describe("balance", function() {
    it("will show the initial balance to be zero", function() {
      var testAccount = Object.create(BankAccount);
      expect(testAccount.balance).to.equal(0);
    });
  });

  describe("deposit()", function() {
    it("will add a deposit to the balance", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(100);
      expect(testAccount.balance).to.equal(100);
    });
  });

  describe("withdraw()", function() {
    it("will subtract a withdrawal from the balance", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.withdraw(50);
      expect(testAccount.balance).to.equal(-50);
    });
  });
});
