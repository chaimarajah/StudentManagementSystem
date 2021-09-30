function deposit (amount) {
    this.balance=this.balance + amount;
    return this.balance;
}
function withdraw(amount) {
    this.balance=this.balance - amount;
    return this.balance



}
function makeAccount(balance) {
return{
     balance: initial,
     withdraw,
     deposit
}

}
var account= makeAccount (100)