import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StructureTitle } from "../structure/StructureTitle";
import { FederationTitle } from "../federation/FederationTitle";
import { AgenceTitle } from "../agence/AgenceTitle";

export const AssociationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="structure.id"
          reference="Structure"
          label="Structure"
        >
          <SelectInput optionText={StructureTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="federation.id"
          reference="Federation"
          label="Federation"
        >
          <SelectInput optionText={FederationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="agences"
          reference="Agence"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AgenceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
