import { Structure } from "../structure/Structure";
import { Association } from "../association/Association";

export type Agence = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  structure?: Structure;
  association?: Association | null;
};
