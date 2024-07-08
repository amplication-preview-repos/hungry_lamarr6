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

export const AssociationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Associations"}
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
      </Datagrid>
    </List>
  );
};
