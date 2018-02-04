export class News {
  id: number;
  date: Date;
  title: string;
  text: string;

  constructor (newsRawObject: any) {
    // Properties
    this.id = newsRawObject.id;
    if (newsRawObject.date) { this.date = new Date(newsRawObject.date); }
    this.title = newsRawObject.title;
    this.text = newsRawObject.text;
  }
}
