import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FederationService } from "./federation.service";
import { FederationControllerBase } from "./base/federation.controller.base";

@swagger.ApiTags("federations")
@common.Controller("federations")
export class FederationController extends FederationControllerBase {
  constructor(protected readonly service: FederationService) {
    super(service);
  }
}
