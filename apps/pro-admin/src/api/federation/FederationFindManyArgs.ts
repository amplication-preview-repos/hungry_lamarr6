import { FederationWhereInput } from "./FederationWhereInput";
import { FederationOrderByInput } from "./FederationOrderByInput";

export type FederationFindManyArgs = {
  where?: FederationWhereInput;
  orderBy?: Array<FederationOrderByInput>;
  skip?: number;
  take?: number;
};
