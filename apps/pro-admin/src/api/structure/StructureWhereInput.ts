import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";
import { AssociationWhereUniqueInput } from "../association/AssociationWhereUniqueInput";
import { AgenceWhereUniqueInput } from "../agence/AgenceWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type StructureWhereInput = {
  id?: StringFilter;
  code?: StringNullableFilter;
  affectationDomaine?: StringNullableFilter;
  federation?: FederationWhereUniqueInput;
  association?: AssociationWhereUniqueInput;
  agence?: AgenceWhereUniqueInput;
  libelle?: StringNullableFilter;
  utilisateur?: UtilisateurWhereUniqueInput;
};
