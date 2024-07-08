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
import { AffectationService } from "../affectation.service";
import { AffectationCreateInput } from "./AffectationCreateInput";
import { Affectation } from "./Affectation";
import { AffectationFindManyArgs } from "./AffectationFindManyArgs";
import { AffectationWhereUniqueInput } from "./AffectationWhereUniqueInput";
import { AffectationUpdateInput } from "./AffectationUpdateInput";

export class AffectationControllerBase {
  constructor(protected readonly service: AffectationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Affectation })
  async createAffectation(
    @common.Body() data: AffectationCreateInput
  ): Promise<Affectation> {
    return await this.service.createAffectation({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Affectation] })
  @ApiNestedQuery(AffectationFindManyArgs)
  async affectations(@common.Req() request: Request): Promise<Affectation[]> {
    const args = plainToClass(AffectationFindManyArgs, request.query);
    return this.service.affectations({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Affectation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async affectation(
    @common.Param() params: AffectationWhereUniqueInput
  ): Promise<Affectation | null> {
    const result = await this.service.affectation({
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
  @swagger.ApiOkResponse({ type: Affectation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAffectation(
    @common.Param() params: AffectationWhereUniqueInput,
    @common.Body() data: AffectationUpdateInput
  ): Promise<Affectation | null> {
    try {
      return await this.service.updateAffectation({
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
  @swagger.ApiOkResponse({ type: Affectation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAffectation(
    @common.Param() params: AffectationWhereUniqueInput
  ): Promise<Affectation | null> {
    try {
      return await this.service.deleteAffectation({
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
}