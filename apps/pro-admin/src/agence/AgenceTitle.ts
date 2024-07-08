import { Agence as TAgence } from "../api/agence/Agence";

export const AGENCE_TITLE_FIELD = "id";

export const AgenceTitle = (record: TAgence): string => {
  return record.id?.toString() || String(record.id);
};
