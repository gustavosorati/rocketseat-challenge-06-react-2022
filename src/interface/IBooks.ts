export interface IBook {
  id: number;
  title: string;
  author: string;
  cover_url: string;
  created_at: string;
  summary: string;
  total_pages: number;
}

export interface IBookRating {
  id: string;
  book_id: string;
  description: string;
  rate: number;
  created_at: string;
}