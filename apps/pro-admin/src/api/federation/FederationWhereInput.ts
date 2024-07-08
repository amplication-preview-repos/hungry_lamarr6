import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { AssociationListRelationFilter } from "../association/AssociationListRelationFilter";

export type FederationWhereInput = {
  id?: StringFilter;
  affectationDomaine?: StringNullableFilter;
  structure?: StructureWhereUniqueInput;
  associations?: AssociationListRelationFilter;
};
