import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";
import { AssociationWhereUniqueInput } from "../association/AssociationWhereUniqueInput";
import { AgenceWhereUniqueInput } from "../agence/AgenceWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type StructureUpdateInput = {
  code?: string | null;
  affectationDomaine?: string | null;
  federation?: FederationWhereUniqueInput | null;
  association?: AssociationWhereUniqueInput | null;
  agence?: AgenceWhereUniqueInput | null;
  libelle?: string | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
