/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UtilisateurService } from "../utilisateur.service";
import { UtilisateurCreateInput } from "./UtilisateurCreateInput";
import { Utilisateur } from "./Utilisateur";
import { UtilisateurFindManyArgs } from "./UtilisateurFindManyArgs";
import { UtilisateurWhereUniqueInput } from "./UtilisateurWhereUniqueInput";
import { UtilisateurUpdateInput } from "./UtilisateurUpdateInput";
import { StructureFindManyArgs } from "../../structure/base/StructureFindManyArgs";
import { Structure } from "../../structure/base/Structure";
import { StructureWhereUniqueInput } from "../../structure/base/StructureWhereUniqueInput";

export class UtilisateurControllerBase {
  constructor(protected readonly service: UtilisateurService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Utilisateur })
  async createUtilisateur(
    @common.Body() data: UtilisateurCreateInput
  ): Promise<Utilisateur> {
    return await this.service.createUtilisateur({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Utilisateur] })
  @ApiNestedQuery(UtilisateurFindManyArgs)
  async utilisateurs(@common.Req() request: Request): Promise<Utilisateur[]> {
    const args = plainToClass(UtilisateurFindManyArgs, request.query);
    return this.service.utilisateurs({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Utilisateur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async utilisateur(
    @common.Param() params: UtilisateurWhereUniqueInput
  ): Promise<Utilisateur | null> {
    const result = await this.service.utilisateur({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Utilisateur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUtilisateur(
    @common.Param() params: UtilisateurWhereUniqueInput,
    @common.Body() data: UtilisateurUpdateInput
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.updateUtilisateur({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Utilisateur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUtilisateur(
    @common.Param() params: UtilisateurWhereUniqueInput
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.deleteUtilisateur({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/structures")
  @ApiNestedQuery(StructureFindManyArgs)
  async findStructures(
    @common.Req() request: Request,
    @common.Param() params: UtilisateurWhereUniqueInput
  ): Promise<Structure[]> {
    const query = plainToClass(StructureFindManyArgs, request.query);
    const results = await this.service.findStructures(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        code: true,
        affectationDomaine: true,

        federation: {
          select: {
            id: true,
          },
        },

        association: {
          select: {
            id: true,
          },
        },

        agence: {
          select: {
            id: true,
          },
        },

        libelle: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/structures")
  async connectStructures(
    @common.Param() params: UtilisateurWhereUniqueInput,
    @common.Body() body: StructureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      structures: {
        connect: body,
      },
    };
    await this.service.updateUtilisateur({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/structures")
  async updateStructures(
    @common.Param() params: UtilisateurWhereUniqueInput,
    @common.Body() body: StructureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      structures: {
        set: body,
      },
    };
    await this.service.updateUtilisateur({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/structures")
  async disconnectStructures(
    @common.Param() params: UtilisateurWhereUniqueInput,
    @common.Body() body: StructureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      structures: {
        disconnect: body,
      },
    };
    await this.service.updateUtilisateur({
      where: params,
      data,
      select: { id: true },
    });
  }
}