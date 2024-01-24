export interface IBlog {
  id: string;
  title: string;
  body: string;
}
export interface IBlogContext {
  id: string;
  state: IBlog[];
  addBlogPost: () => void;
  deleteBlogPost: (id: string) => void;
}
