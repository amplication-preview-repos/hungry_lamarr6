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
import { STRUCTURE_TITLE_FIELD } from "../structure/StructureTitle";
import { ASSOCIATION_TITLE_FIELD } from "../association/AssociationTitle";

export const AgenceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Agences"}
      perPage={50}
      pagination={<Pagination />}
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
          label="Association"
          source="association.id"
          reference="Association"
        >
          <TextField source={ASSOCIATION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
