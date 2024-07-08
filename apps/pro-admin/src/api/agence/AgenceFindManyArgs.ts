import { AgenceWhereInput } from "./AgenceWhereInput";
import { AgenceOrderByInput } from "./AgenceOrderByInput";

export type AgenceFindManyArgs = {
  where?: AgenceWhereInput;
  orderBy?: Array<AgenceOrderByInput>;
  skip?: number;
  take?: number;
};
