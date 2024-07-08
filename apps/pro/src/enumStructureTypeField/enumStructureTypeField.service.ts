import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnumStructureTypeFieldServiceBase } from "./base/enumStructureTypeField.service.base";

@Injectable()
export class EnumStructureTypeFieldService extends EnumStructureTypeFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
