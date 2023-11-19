export class Copy {
  public constructor(
    public copyNumber: number,
    public title: string,
    public author: string[],
    public publisher: string,
    public edition: string,
    public year: string,
    public lendDate: Date,
    public returnForecast: Date,
  ) {}
}
