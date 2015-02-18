var BankAccount = {
  balance: 0,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    var name = $("input#new-name").val();
    var balance = parseInt($("input#initial-deposit").val());

    var newAccount = Object.create(BankAccount);
    newAccount.name = name;
    newAccount.balance = balance;

    $(".balance-display").text(newAccount.balance);

    $("input#new-name").val("");
    $("input#initial-deposit").val("");

    event.preventDefault();

    $("form#deposit-withdraw").submit(function(event) {
      var deposit = parseInt($("input#new-deposit").val());
      var withdraw = parseInt($("input#new-withdraw").val());

      newAccount.deposit(deposit);
      newAccount.withdraw(withdraw);
      $(".balance-display").text(newAccount.balance);

      $("input#new-deposit").val("");
      $("input#new-withdraw").val("");
      event.preventDefault();
    });
  });
});
