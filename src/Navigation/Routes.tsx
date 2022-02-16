import { CategoryInterface } from '../../types';

export type RootStackRoutes = {
  Home: undefined;
  Details: {
    title: string;
    content: string;
    author: string;
    category: CategoryInterface;
  };
};
