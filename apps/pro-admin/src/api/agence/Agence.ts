import { Structure } from "../structure/Structure";

export type Agence = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  structure?: Structure;
};
