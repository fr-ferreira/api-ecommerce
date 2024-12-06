export class Product {
  constructor(
    public id: number,  // Add this ID field
    public title: string,
    public category: string,
    public description: string,
    public image: string,
    public price: number,
  ) {}
}
