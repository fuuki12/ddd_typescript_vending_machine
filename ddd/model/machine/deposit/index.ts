import { createMock } from "ts-auto-mock";

export class Deposit {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _price: number;
  private readonly _stock: boolean;

  static create(id: number, name: string, price: number, stock: boolean) {
    return new Deposit(id, name, price, stock);
  }

  public get getId(): number {
    return this._id;
  }

  public get getName(): string {
    return this._name;
  }

  public get getPrice(): number {
    return this._price;
  }

  public get getStock(): boolean {
    return this._stock;
  }

  private constructor(id: number, name: string, price: number, stock: boolean) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._stock = stock;
  }
}
