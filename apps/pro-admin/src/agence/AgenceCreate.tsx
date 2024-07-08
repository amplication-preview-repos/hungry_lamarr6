import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StructureTitle } from "../structure/StructureTitle";
import { AssociationTitle } from "../association/AssociationTitle";

export const AgenceCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceInput
          source="association.id"
          reference="Association"
          label="Association"
        >
          <SelectInput optionText={AssociationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
