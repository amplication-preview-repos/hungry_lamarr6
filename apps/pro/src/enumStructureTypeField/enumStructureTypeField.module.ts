import { Module } from "@nestjs/common";
import { EnumStructureTypeFieldModuleBase } from "./base/enumStructureTypeField.module.base";
import { EnumStructureTypeFieldService } from "./enumStructureTypeField.service";
import { EnumStructureTypeFieldController } from "./enumStructureTypeField.controller";
import { EnumStructureTypeFieldResolver } from "./enumStructureTypeField.resolver";

@Module({
  imports: [EnumStructureTypeFieldModuleBase],
  controllers: [EnumStructureTypeFieldController],
  providers: [EnumStructureTypeFieldService, EnumStructureTypeFieldResolver],
  exports: [EnumStructureTypeFieldService],
})
export class EnumStructureTypeFieldModule {}
