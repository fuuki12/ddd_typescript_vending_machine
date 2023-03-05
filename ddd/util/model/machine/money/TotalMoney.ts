export class TotalMoney {
  totalMoney: number;

  private constructor(totalMoney: number) {
    this.totalMoney = totalMoney;
  }

  static new(totalMoney: number): number {
    return totalMoney;
  }

  static count(totalMoney: number, money: number): void {
    if (money) {
      TotalMoney.new(totalMoney + money);
    } else {
      throw new Error("totalMoney domain error");
    }
  }
}
