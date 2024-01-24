export interface IBlog {
  title: string;
  body: string;
}
export interface IBlogContext {
  state: IBlog[];
  addBlogPost: () => void;
}
