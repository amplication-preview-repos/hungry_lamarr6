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
  EnumStructureTypeField as PrismaEnumStructureTypeField,
} from "@prisma/client";

export class EnumStructureTypeFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EnumStructureTypeFieldCountArgs, "select">
  ): Promise<number> {
    return this.prisma.enumStructureTypeField.count(args);
  }

  async enumStructureTypeFields(
    args: Prisma.EnumStructureTypeFieldFindManyArgs
  ): Promise<PrismaEnumStructureTypeField[]> {
    return this.prisma.enumStructureTypeField.findMany(args);
  }
  async enumStructureTypeField(
    args: Prisma.EnumStructureTypeFieldFindUniqueArgs
  ): Promise<PrismaEnumStructureTypeField | null> {
    return this.prisma.enumStructureTypeField.findUnique(args);
  }
  async createEnumStructureTypeField(
    args: Prisma.EnumStructureTypeFieldCreateArgs
  ): Promise<PrismaEnumStructureTypeField> {
    return this.prisma.enumStructureTypeField.create(args);
  }
  async updateEnumStructureTypeField(
    args: Prisma.EnumStructureTypeFieldUpdateArgs
  ): Promise<PrismaEnumStructureTypeField> {
    return this.prisma.enumStructureTypeField.update(args);
  }
  async deleteEnumStructureTypeField(
    args: Prisma.EnumStructureTypeFieldDeleteArgs
  ): Promise<PrismaEnumStructureTypeField> {
    return this.prisma.enumStructureTypeField.delete(args);
  }
}