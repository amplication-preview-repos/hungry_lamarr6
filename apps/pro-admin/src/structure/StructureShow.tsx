import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { FEDERATION_TITLE_FIELD } from "../federation/FederationTitle";
import { ASSOCIATION_TITLE_FIELD } from "../association/AssociationTitle";
import { AGENCE_TITLE_FIELD } from "../agence/AgenceTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const StructureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Code" source="code" />
        <TextField label="AffectationDomaine" source="affectationDomaine" />
        <ReferenceField
          label="Federation"
          source="federation.id"
          reference="Federation"
        >
          <TextField source={FEDERATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Association"
          source="association.id"
          reference="Association"
        >
          <TextField source={ASSOCIATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Agence" source="agence.id" reference="Agence">
          <TextField source={AGENCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Libelle" source="libelle" />
        <ReferenceField
          label="Utilisateur"
          source="utilisateur.id"
          reference="Utilisateur"
        >
          <TextField source={UTILISATEUR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
