import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StructureTitle } from "../structure/StructureTitle";
import { AssociationTitle } from "../association/AssociationTitle";

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
        <ReferenceArrayInput
          source="associations"
          reference="Association"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssociationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
