import * as graphql from "@nestjs/graphql";
import { FederationResolverBase } from "./base/federation.resolver.base";
import { Federation } from "./base/Federation";
import { FederationService } from "./federation.service";

@graphql.Resolver(() => Federation)
export class FederationResolver extends FederationResolverBase {
  constructor(protected readonly service: FederationService) {
    super(service);
  }
}
