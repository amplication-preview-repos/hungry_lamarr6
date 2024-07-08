import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type FederationCreateInput = {
  affectationDomaine?: string | null;
  structure: StructureWhereUniqueInput;
};
