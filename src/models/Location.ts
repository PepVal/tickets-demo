export class Location {
  id: number;
  name: string;
  price: string;
  rows: number;
  columns: number;
  posX: number;
  posY: number;

  constructor() {
    this.id = new Date().getMilliseconds();
    this.name = "";
    this.price = "";
    this.rows = 5;
    this.columns = 5;
    this.posX = 0;
    this.posY = 0;
  }
}
