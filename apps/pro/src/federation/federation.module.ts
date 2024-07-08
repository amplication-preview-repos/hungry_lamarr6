import { Module } from "@nestjs/common";
import { FederationModuleBase } from "./base/federation.module.base";
import { FederationService } from "./federation.service";
import { FederationController } from "./federation.controller";
import { FederationResolver } from "./federation.resolver";

@Module({
  imports: [FederationModuleBase],
  controllers: [FederationController],
  providers: [FederationService, FederationResolver],
  exports: [FederationService],
})
export class FederationModule {}
