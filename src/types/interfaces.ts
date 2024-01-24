export interface IBlog {
  title: string;
  body: string;
}
export interface IBlogContext {
  data: IBlog[];
  addBlogPost: () => void;
}
