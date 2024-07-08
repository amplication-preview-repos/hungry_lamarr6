import { Federation } from "../federation/Federation";
import { Association } from "../association/Association";
import { Agence } from "../agence/Agence";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Structure = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  code: string | null;
  affectationDomaine: string | null;
  federation?: Federation | null;
  association?: Association | null;
  agence?: Agence | null;
  libelle: string | null;
  utilisateur?: Utilisateur | null;
};
