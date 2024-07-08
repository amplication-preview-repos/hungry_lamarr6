import { StringFilter } from "../../util/StringFilter";
import { StructureListRelationFilter } from "../structure/StructureListRelationFilter";

export type UtilisateurWhereInput = {
  id?: StringFilter;
  structures?: StructureListRelationFilter;
};
