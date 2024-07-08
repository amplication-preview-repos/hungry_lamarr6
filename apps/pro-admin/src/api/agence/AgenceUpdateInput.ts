import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { AssociationWhereUniqueInput } from "../association/AssociationWhereUniqueInput";

export type AgenceUpdateInput = {
  structure?: StructureWhereUniqueInput;
  association?: AssociationWhereUniqueInput | null;
};
