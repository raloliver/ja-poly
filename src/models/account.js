export class BankAccount {
  constructor({ owner, bank, agency, number }) {
    /*
    this.owner = owner;
    this.bank = bank;
    this.agency = agency;
    this.number = number;
    */
    Object.assign(this, { owner, bank, agency, number });
  }
}
