import { EnumStructureTypeField as TEnumStructureTypeField } from "../api/enumStructureTypeField/EnumStructureTypeField";

export const ENUMSTRUCTURETYPEFIELD_TITLE_FIELD = "id";

export const EnumStructureTypeFieldTitle = (
  record: TEnumStructureTypeField
): string => {
  return record.id?.toString() || String(record.id);
};
