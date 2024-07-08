import { SortOrder } from "../../util/SortOrder";

export type StructureOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  code?: SortOrder;
  affectationDomaine?: SortOrder;
  federationId?: SortOrder;
  associationId?: SortOrder;
  agenceId?: SortOrder;
  libelle?: SortOrder;
  utilisateurId?: SortOrder;
};
