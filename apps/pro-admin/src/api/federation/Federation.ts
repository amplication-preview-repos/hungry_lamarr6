import { Structure } from "../structure/Structure";
import { Association } from "../association/Association";

export type Federation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  affectationDomaine: string | null;
  structure?: Structure;
  associations?: Array<Association>;
};
