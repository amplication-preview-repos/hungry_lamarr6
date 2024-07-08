import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FederationTitle } from "../federation/FederationTitle";
import { AssociationTitle } from "../association/AssociationTitle";
import { AgenceTitle } from "../agence/AgenceTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const StructureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="affectationDomaine" source="affectationDomaine" />
        <ReferenceInput
          source="federation.id"
          reference="Federation"
          label="federation"
        >
          <SelectInput optionText={FederationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="association.id"
          reference="Association"
          label="association"
        >
          <SelectInput optionText={AssociationTitle} />
        </ReferenceInput>
        <ReferenceInput source="agence.id" reference="Agence" label="agence">
          <SelectInput optionText={AgenceTitle} />
        </ReferenceInput>
        <TextInput label="libelle" source="libelle" />
        <ReferenceInput
          source="utilisateur.id"
          reference="Utilisateur"
          label="utilisateur"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
