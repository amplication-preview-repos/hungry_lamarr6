import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type FederationWhereInput = {
  id?: StringFilter;
  affectationDomaine?: StringNullableFilter;
  structure?: StructureWhereUniqueInput;
};
