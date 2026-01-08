import { TRootResponse } from './common.interfaces';

export type CategoryRoot = TRootResponse<TCategoryDoc[]>;

export interface TCategoryDoc {
  _id: string;
  title: string;
  type: string;
  description: string;
  categoryIcon: string;
  isActive: boolean;
  createdAt: string;
  id: string;
}
