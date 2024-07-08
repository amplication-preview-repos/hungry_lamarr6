import { StringFilter } from "../../util/StringFilter";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type AgenceWhereInput = {
  id?: StringFilter;
  structure?: StructureWhereUniqueInput;
};
