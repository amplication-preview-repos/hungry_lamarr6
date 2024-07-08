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
import { StructureService } from "../structure.service";
import { StructureCreateInput } from "./StructureCreateInput";
import { Structure } from "./Structure";
import { StructureFindManyArgs } from "./StructureFindManyArgs";
import { StructureWhereUniqueInput } from "./StructureWhereUniqueInput";
import { StructureUpdateInput } from "./StructureUpdateInput";

export class StructureControllerBase {
  constructor(protected readonly service: StructureService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Structure })
  async createStructure(
    @common.Body() data: StructureCreateInput
  ): Promise<Structure> {
    return await this.service.createStructure({
      data: {
        ...data,

        federation: data.federation
          ? {
              connect: data.federation,
            }
          : undefined,

        association: data.association
          ? {
              connect: data.association,
            }
          : undefined,

        agence: data.agence
          ? {
              connect: data.agence,
            }
          : undefined,

        utilisateur: data.utilisateur
          ? {
              connect: data.utilisateur,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Structure] })
  @ApiNestedQuery(StructureFindManyArgs)
  async structures(@common.Req() request: Request): Promise<Structure[]> {
    const args = plainToClass(StructureFindManyArgs, request.query);
    return this.service.structures({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Structure })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async structure(
    @common.Param() params: StructureWhereUniqueInput
  ): Promise<Structure | null> {
    const result = await this.service.structure({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Structure })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStructure(
    @common.Param() params: StructureWhereUniqueInput,
    @common.Body() data: StructureUpdateInput
  ): Promise<Structure | null> {
    try {
      return await this.service.updateStructure({
        where: params,
        data: {
          ...data,

          federation: data.federation
            ? {
                connect: data.federation,
              }
            : undefined,

          association: data.association
            ? {
                connect: data.association,
              }
            : undefined,

          agence: data.agence
            ? {
                connect: data.agence,
              }
            : undefined,

          utilisateur: data.utilisateur
            ? {
                connect: data.utilisateur,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Structure })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStructure(
    @common.Param() params: StructureWhereUniqueInput
  ): Promise<Structure | null> {
    try {
      return await this.service.deleteStructure({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
