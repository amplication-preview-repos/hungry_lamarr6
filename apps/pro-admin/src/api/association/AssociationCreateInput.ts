import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";
import { AgenceCreateNestedManyWithoutAssociationsInput } from "./AgenceCreateNestedManyWithoutAssociationsInput";

export type AssociationCreateInput = {
  structure: StructureWhereUniqueInput;
  federation?: FederationWhereUniqueInput | null;
  agences?: AgenceCreateNestedManyWithoutAssociationsInput;
};
