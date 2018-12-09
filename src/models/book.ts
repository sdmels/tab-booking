export type Category = 'drama' | 'comedy' | 'sport';

export interface Book {
  title: string;
  category: Category;
  description: string;
}
