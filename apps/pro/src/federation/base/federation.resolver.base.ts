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
import { Federation } from "./Federation";
import { FederationCountArgs } from "./FederationCountArgs";
import { FederationFindManyArgs } from "./FederationFindManyArgs";
import { FederationFindUniqueArgs } from "./FederationFindUniqueArgs";
import { CreateFederationArgs } from "./CreateFederationArgs";
import { UpdateFederationArgs } from "./UpdateFederationArgs";
import { DeleteFederationArgs } from "./DeleteFederationArgs";
import { AssociationFindManyArgs } from "../../association/base/AssociationFindManyArgs";
import { Association } from "../../association/base/Association";
import { Structure } from "../../structure/base/Structure";
import { FederationService } from "../federation.service";
@graphql.Resolver(() => Federation)
export class FederationResolverBase {
  constructor(protected readonly service: FederationService) {}

  async _federationsMeta(
    @graphql.Args() args: FederationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Federation])
  async federations(
    @graphql.Args() args: FederationFindManyArgs
  ): Promise<Federation[]> {
    return this.service.federations(args);
  }

  @graphql.Query(() => Federation, { nullable: true })
  async federation(
    @graphql.Args() args: FederationFindUniqueArgs
  ): Promise<Federation | null> {
    const result = await this.service.federation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Federation)
  async createFederation(
    @graphql.Args() args: CreateFederationArgs
  ): Promise<Federation> {
    return await this.service.createFederation({
      ...args,
      data: {
        ...args.data,

        structure: {
          connect: args.data.structure,
        },
      },
    });
  }

  @graphql.Mutation(() => Federation)
  async updateFederation(
    @graphql.Args() args: UpdateFederationArgs
  ): Promise<Federation | null> {
    try {
      return await this.service.updateFederation({
        ...args,
        data: {
          ...args.data,

          structure: {
            connect: args.data.structure,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Federation)
  async deleteFederation(
    @graphql.Args() args: DeleteFederationArgs
  ): Promise<Federation | null> {
    try {
      return await this.service.deleteFederation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Association], { name: "associations" })
  async findAssociations(
    @graphql.Parent() parent: Federation,
    @graphql.Args() args: AssociationFindManyArgs
  ): Promise<Association[]> {
    const results = await this.service.findAssociations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Structure, {
    nullable: true,
    name: "structure",
  })
  async getStructure(
    @graphql.Parent() parent: Federation
  ): Promise<Structure | null> {
    const result = await this.service.getStructure(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
