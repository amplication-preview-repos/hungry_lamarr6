import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StructureTitle } from "../structure/StructureTitle";

export const FederationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="affectationDomaine" source="affectationDomaine" />
        <ReferenceInput
          source="structure.id"
          reference="Structure"
          label="Structure"
        >
          <SelectInput optionText={StructureTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
