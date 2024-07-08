import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StructureTitle } from "../structure/StructureTitle";
import { AssociationTitle } from "../association/AssociationTitle";

export const AgenceEdit = (props: EditProps): React.ReactElement => {
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
          source="association.id"
          reference="Association"
          label="Association"
        >
          <SelectInput optionText={AssociationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
