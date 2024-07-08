import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StructureTitle } from "../structure/StructureTitle";

export const AgenceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="structure.id"
          reference="Structure"
          label="structure"
        >
          <SelectInput optionText={StructureTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
