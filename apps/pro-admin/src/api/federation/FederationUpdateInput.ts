import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { AssociationUpdateManyWithoutFederationsInput } from "./AssociationUpdateManyWithoutFederationsInput";

export type FederationUpdateInput = {
  affectationDomaine?: string | null;
  structure?: StructureWhereUniqueInput;
  associations?: AssociationUpdateManyWithoutFederationsInput;
};
