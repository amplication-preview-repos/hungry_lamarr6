import { StringFilter } from "../../util/StringFilter";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";
import { AgenceListRelationFilter } from "../agence/AgenceListRelationFilter";

export type AssociationWhereInput = {
  id?: StringFilter;
  structure?: StructureWhereUniqueInput;
  federation?: FederationWhereUniqueInput;
  agences?: AgenceListRelationFilter;
};
