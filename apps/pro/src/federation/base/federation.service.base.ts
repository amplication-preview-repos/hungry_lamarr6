/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Federation as PrismaFederation,
  Structure as PrismaStructure,
} from "@prisma/client";

export class FederationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FederationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.federation.count(args);
  }

  async federations(
    args: Prisma.FederationFindManyArgs
  ): Promise<PrismaFederation[]> {
    return this.prisma.federation.findMany(args);
  }
  async federation(
    args: Prisma.FederationFindUniqueArgs
  ): Promise<PrismaFederation | null> {
    return this.prisma.federation.findUnique(args);
  }
  async createFederation(
    args: Prisma.FederationCreateArgs
  ): Promise<PrismaFederation> {
    return this.prisma.federation.create(args);
  }
  async updateFederation(
    args: Prisma.FederationUpdateArgs
  ): Promise<PrismaFederation> {
    return this.prisma.federation.update(args);
  }
  async deleteFederation(
    args: Prisma.FederationDeleteArgs
  ): Promise<PrismaFederation> {
    return this.prisma.federation.delete(args);
  }

  async getStructure(parentId: string): Promise<PrismaStructure | null> {
    return this.prisma.federation
      .findUnique({
        where: { id: parentId },
      })
      .structure();
  }
}