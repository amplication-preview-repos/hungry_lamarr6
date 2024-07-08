import { Federation as TFederation } from "../api/federation/Federation";

export const FEDERATION_TITLE_FIELD = "affectationDomaine";

export const FederationTitle = (record: TFederation): string => {
  return record.affectationDomaine?.toString() || String(record.id);
};
