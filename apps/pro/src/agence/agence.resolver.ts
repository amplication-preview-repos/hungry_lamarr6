import * as graphql from "@nestjs/graphql";
import { AgenceResolverBase } from "./base/agence.resolver.base";
import { Agence } from "./base/Agence";
import { AgenceService } from "./agence.service";

@graphql.Resolver(() => Agence)
export class AgenceResolver extends AgenceResolverBase {
  constructor(protected readonly service: AgenceService) {
    super(service);
  }
}
