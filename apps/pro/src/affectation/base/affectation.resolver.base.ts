/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Affectation } from "./Affectation";
import { AffectationCountArgs } from "./AffectationCountArgs";
import { AffectationFindManyArgs } from "./AffectationFindManyArgs";
import { AffectationFindUniqueArgs } from "./AffectationFindUniqueArgs";
import { DeleteAffectationArgs } from "./DeleteAffectationArgs";
import { AffectationService } from "../affectation.service";
@graphql.Resolver(() => Affectation)
export class AffectationResolverBase {
  constructor(protected readonly service: AffectationService) {}

  async _affectationsMeta(
    @graphql.Args() args: AffectationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Affectation])
  async affectations(
    @graphql.Args() args: AffectationFindManyArgs
  ): Promise<Affectation[]> {
    return this.service.affectations(args);
  }

  @graphql.Query(() => Affectation, { nullable: true })
  async affectation(
    @graphql.Args() args: AffectationFindUniqueArgs
  ): Promise<Affectation | null> {
    const result = await this.service.affectation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Affectation)
  async deleteAffectation(
    @graphql.Args() args: DeleteAffectationArgs
  ): Promise<Affectation | null> {
    try {
      return await this.service.deleteAffectation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}