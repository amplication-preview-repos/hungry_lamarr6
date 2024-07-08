import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FEDERATION_TITLE_FIELD } from "../federation/FederationTitle";
import { ASSOCIATION_TITLE_FIELD } from "../association/AssociationTitle";
import { AGENCE_TITLE_FIELD } from "../agence/AgenceTitle";
import { UTILISATEUR_TITLE_FIELD } from "./UtilisateurTitle";

export const UtilisateurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Structure"
          target="utilisateurId"
          label="Structures"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="code" source="code" />
            <TextField label="affectationDomaine" source="affectationDomaine" />
            <ReferenceField
              label="federation"
              source="federation.id"
              reference="Federation"
            >
              <TextField source={FEDERATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="association"
              source="association.id"
              reference="Association"
            >
              <TextField source={ASSOCIATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="agence"
              source="agence.id"
              reference="Agence"
            >
              <TextField source={AGENCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="libelle" source="libelle" />
            <ReferenceField
              label="utilisateur"
              source="utilisateur.id"
              reference="Utilisateur"
            >
              <TextField source={UTILISATEUR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
