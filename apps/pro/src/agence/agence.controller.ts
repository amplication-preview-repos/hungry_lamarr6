import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgenceService } from "./agence.service";
import { AgenceControllerBase } from "./base/agence.controller.base";

@swagger.ApiTags("agences")
@common.Controller("agences")
export class AgenceController extends AgenceControllerBase {
  constructor(protected readonly service: AgenceService) {
    super(service);
  }
}
