/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAcc = new Account(this.nextAccountNumber, holder);
    newAcc.balance = balance;
    this.accounts.push(newAcc);
    this.nextAccountNumber++;
    return newAcc.number;
  } else {
    return null;
  }
};
