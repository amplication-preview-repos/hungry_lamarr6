import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STRUCTURE_TITLE_FIELD } from "../structure/StructureTitle";
import { FEDERATION_TITLE_FIELD } from "./FederationTitle";

export const FederationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="affectationDomaine" source="affectationDomaine" />
        <ReferenceField
          label="Structure"
          source="structure.id"
          reference="Structure"
        >
          <TextField source={STRUCTURE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Association"
          target="federationId"
          label="Associations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Structure"
              source="structure.id"
              reference="Structure"
            >
              <TextField source={STRUCTURE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Federation"
              source="federation.id"
              reference="Federation"
            >
              <TextField source={FEDERATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
