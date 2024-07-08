import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StructureTitle } from "../structure/StructureTitle";

export const FederationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
