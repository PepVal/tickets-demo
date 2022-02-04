export class Location {
  id: number;
  name: string;
  price: string;
  rows: number;
  columns: number;

  constructor() {
    this.id = new Date().getMilliseconds();
    this.name = "";
    this.price = "";
    this.rows = 5;
    this.columns = 5;
  }
}
