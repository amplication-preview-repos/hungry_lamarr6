import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FEDERATION_TITLE_FIELD } from "../federation/FederationTitle";
import { ASSOCIATION_TITLE_FIELD } from "../association/AssociationTitle";
import { AGENCE_TITLE_FIELD } from "../agence/AgenceTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const StructureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Structures"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="agence" source="agence.id" reference="Agence">
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
    </List>
  );
};
