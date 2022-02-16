export interface CategoryInterface {
  __typename: string;
  id: string;
  title: string;
}

export interface BookInterface {
  __typename?: string;
  author?: string;
  category: CategoryInterface;
  id?: string;
  content?: string;
  title: string;
  image?: string;
}
