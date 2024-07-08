import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgenceServiceBase } from "./base/agence.service.base";

@Injectable()
export class AgenceService extends AgenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
