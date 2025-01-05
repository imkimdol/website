import { Dispatch } from 'react';

export enum ProjectCategory {Software, GameDev, Music};
export interface selectedCategoryReadOnlyProps {
  selectedCategory: ProjectCategory
}
export interface selectedCategoryWriteProps extends selectedCategoryReadOnlyProps {
  setSelectedCategory: Dispatch<React.SetStateAction<ProjectCategory>>
}