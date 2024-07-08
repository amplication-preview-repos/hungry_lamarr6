import { Structure } from "../structure/Structure";

export type Federation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  affectationDomaine: string | null;
  structure?: Structure;
};
