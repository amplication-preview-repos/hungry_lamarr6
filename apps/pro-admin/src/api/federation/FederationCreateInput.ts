import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { AssociationCreateNestedManyWithoutFederationsInput } from "./AssociationCreateNestedManyWithoutFederationsInput";

export type FederationCreateInput = {
  affectationDomaine?: string | null;
  structure: StructureWhereUniqueInput;
  associations?: AssociationCreateNestedManyWithoutFederationsInput;
};
