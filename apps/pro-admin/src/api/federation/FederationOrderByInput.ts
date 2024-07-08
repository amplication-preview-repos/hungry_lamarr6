import { SortOrder } from "../../util/SortOrder";

export type FederationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  affectationDomaine?: SortOrder;
  structureId?: SortOrder;
};
