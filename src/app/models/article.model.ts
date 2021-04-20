export class Article {
  _id: string;
  title: string;
  description: string;
  private published: boolean;
  image: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(_id: string, title: string, description: string, published: boolean, image: string, createdAt: Date, updatedAt: Date) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.published = published;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
