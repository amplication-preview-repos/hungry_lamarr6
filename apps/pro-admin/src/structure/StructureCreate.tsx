import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FederationTitle } from "../federation/FederationTitle";
import { AssociationTitle } from "../association/AssociationTitle";
import { AgenceTitle } from "../agence/AgenceTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const StructureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="AffectationDomaine" source="affectationDomaine" />
        <ReferenceInput
          source="federation.id"
          reference="Federation"
          label="Federation"
        >
          <SelectInput optionText={FederationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="association.id"
          reference="Association"
          label="Association"
        >
          <SelectInput optionText={AssociationTitle} />
        </ReferenceInput>
        <ReferenceInput source="agence.id" reference="Agence" label="Agence">
          <SelectInput optionText={AgenceTitle} />
        </ReferenceInput>
        <TextInput label="Libelle" source="libelle" />
        <ReferenceInput
          source="utilisateur.id"
          reference="Utilisateur"
          label="Utilisateur"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
