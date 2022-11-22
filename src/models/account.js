/**
 * another way to clone objects: https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
 * 
 * get inspiration from typescript: access change (public/private/protected) inside the constructor args (https://1drv.ms/u/s!Agre0RjhOj8Pg7JcowHbJmQdKJYchg)
 *
 * @export
 * @class BankAccount
 */
export class BankAccount {
  constructor({ owner, bank, agency, number }) {
    /*
    this.owner = owner;
    this.bank = bank;
    this.agency = agency;
    this.number = number;
    */

    // this instance of this class
    // when the var has the same name of the prop, you can ommit it
    Object.assign(this, { owner, bank, agency, number });
  }
}
