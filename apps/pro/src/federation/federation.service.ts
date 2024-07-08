import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FederationServiceBase } from "./base/federation.service.base";

@Injectable()
export class FederationService extends FederationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
