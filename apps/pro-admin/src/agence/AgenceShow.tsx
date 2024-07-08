import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STRUCTURE_TITLE_FIELD } from "../structure/StructureTitle";
import { ASSOCIATION_TITLE_FIELD } from "../association/AssociationTitle";

export const AgenceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
          label="Association"
          source="association.id"
          reference="Association"
        >
          <TextField source={ASSOCIATION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
