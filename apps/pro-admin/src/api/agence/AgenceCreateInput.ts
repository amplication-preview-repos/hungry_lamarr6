import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { AssociationWhereUniqueInput } from "../association/AssociationWhereUniqueInput";

export type AgenceCreateInput = {
  structure: StructureWhereUniqueInput;
  association?: AssociationWhereUniqueInput | null;
};
