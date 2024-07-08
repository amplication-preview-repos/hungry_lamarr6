import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StructureTitle } from "../structure/StructureTitle";

export const AssociationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="structure.id"
          reference="Structure"
          label="Structure"
        >
          <SelectInput optionText={StructureTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
