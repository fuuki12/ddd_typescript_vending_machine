import { TotalMoney } from "./TotalMoney";

export class Money {
  money: number;

  private constructor(money: number) {
    this.money = money;
  }

  static NUMBERS = [1000, 500, 100, 50, 10];

  static new(money: number): number {
    if (Money.NUMBERS.includes(money)) {
      return TotalMoney.count(money); //TODOtotal
    } else {
      throw new Error("お釣り Error");
    }
  }
}
