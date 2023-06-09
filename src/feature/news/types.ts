export interface Source {
  id: string;
  name: string;
}

export interface NewsResponse {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}
