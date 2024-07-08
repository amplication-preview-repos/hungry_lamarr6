import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EnumStructureTypeFieldService } from "./enumStructureTypeField.service";
import { EnumStructureTypeFieldControllerBase } from "./base/enumStructureTypeField.controller.base";

@swagger.ApiTags("enumStructureTypeFields")
@common.Controller("enumStructureTypeFields")
export class EnumStructureTypeFieldController extends EnumStructureTypeFieldControllerBase {
  constructor(protected readonly service: EnumStructureTypeFieldService) {
    super(service);
  }
}
