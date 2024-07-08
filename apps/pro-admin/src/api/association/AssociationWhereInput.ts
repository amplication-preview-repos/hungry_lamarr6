import { StringFilter } from "../../util/StringFilter";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type AssociationWhereInput = {
  id?: StringFilter;
  structure?: StructureWhereUniqueInput;
};
