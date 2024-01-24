export interface IBlog {
  id: string;
  title: string;
  body: string;
}
export interface IBlogContext {
  id: string;
  state: IBlog[];
  addBlogPost: (title: string, content: string, onSuccess: () => void) => void;
  deleteBlogPost: (id: string) => void;
}
