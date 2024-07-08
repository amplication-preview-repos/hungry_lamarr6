import { Structure } from "../structure/Structure";
import { Federation } from "../federation/Federation";
import { Agence } from "../agence/Agence";

export type Association = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  structure?: Structure;
  federation?: Federation | null;
  agences?: Array<Agence>;
};
