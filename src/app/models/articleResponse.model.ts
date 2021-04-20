export class ArticleResponse<T> {
  public message: string;
  public data: T;
  public page: number;
  public limit: number;
  public totalPage: number;

  constructor(response: any) {
    this.message = response.message;
    this.limit = response.limit;
    this.totalPage = response.total_page;
    this.page = response.page;
    this.data = response.data;
  }
}
