import { Module } from "@nestjs/common";
import { AgenceModuleBase } from "./base/agence.module.base";
import { AgenceService } from "./agence.service";
import { AgenceController } from "./agence.controller";
import { AgenceResolver } from "./agence.resolver";

@Module({
  imports: [AgenceModuleBase],
  controllers: [AgenceController],
  providers: [AgenceService, AgenceResolver],
  exports: [AgenceService],
})
export class AgenceModule {}
