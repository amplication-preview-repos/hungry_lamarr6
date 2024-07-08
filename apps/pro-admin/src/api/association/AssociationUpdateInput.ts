import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";
import { AgenceUpdateManyWithoutAssociationsInput } from "./AgenceUpdateManyWithoutAssociationsInput";

export type AssociationUpdateInput = {
  structure?: StructureWhereUniqueInput;
  federation?: FederationWhereUniqueInput | null;
  agences?: AgenceUpdateManyWithoutAssociationsInput;
};
