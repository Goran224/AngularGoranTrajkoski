import { PagerModel } from './pager.model';

export interface PhotoModel {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotoModelPaged extends PagerModel {
  TotalCount: number;
  Items: PhotoModel[];
}
