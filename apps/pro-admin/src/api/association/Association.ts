import { Structure } from "../structure/Structure";

export type Association = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  structure?: Structure;
};
