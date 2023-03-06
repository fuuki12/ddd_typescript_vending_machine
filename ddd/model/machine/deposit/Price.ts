export class Price {
  price: number;

  private constructor(price: number) {
    this.price = price;
  }

  static new(price: number): number {
    if (price > 3) {
      throw new Error("postpone count must be less than 3");
    }
    return price;
  }

  static conuntUp(price: number): number {
    return price.new(price + 1);
  }
}
