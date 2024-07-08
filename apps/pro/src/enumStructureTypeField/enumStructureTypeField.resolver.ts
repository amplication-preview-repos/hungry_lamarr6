import * as graphql from "@nestjs/graphql";
import { EnumStructureTypeFieldResolverBase } from "./base/enumStructureTypeField.resolver.base";
import { EnumStructureTypeField } from "./base/EnumStructureTypeField";
import { EnumStructureTypeFieldService } from "./enumStructureTypeField.service";

@graphql.Resolver(() => EnumStructureTypeField)
export class EnumStructureTypeFieldResolver extends EnumStructureTypeFieldResolverBase {
  constructor(protected readonly service: EnumStructureTypeFieldService) {
    super(service);
  }
}
