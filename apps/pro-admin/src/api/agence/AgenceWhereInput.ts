import { StringFilter } from "../../util/StringFilter";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { AssociationWhereUniqueInput } from "../association/AssociationWhereUniqueInput";

export type AgenceWhereInput = {
  id?: StringFilter;
  structure?: StructureWhereUniqueInput;
  association?: AssociationWhereUniqueInput;
};
