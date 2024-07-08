import { Structure } from "../structure/Structure";

export type Utilisateur = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  structures?: Array<Structure>;
};
