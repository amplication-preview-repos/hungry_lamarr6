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
import { Agence } from "./Agence";
import { AgenceCountArgs } from "./AgenceCountArgs";
import { AgenceFindManyArgs } from "./AgenceFindManyArgs";
import { AgenceFindUniqueArgs } from "./AgenceFindUniqueArgs";
import { CreateAgenceArgs } from "./CreateAgenceArgs";
import { UpdateAgenceArgs } from "./UpdateAgenceArgs";
import { DeleteAgenceArgs } from "./DeleteAgenceArgs";
import { Structure } from "../../structure/base/Structure";
import { AgenceService } from "../agence.service";
@graphql.Resolver(() => Agence)
export class AgenceResolverBase {
  constructor(protected readonly service: AgenceService) {}

  async _agencesMeta(
    @graphql.Args() args: AgenceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Agence])
  async agences(@graphql.Args() args: AgenceFindManyArgs): Promise<Agence[]> {
    return this.service.agences(args);
  }

  @graphql.Query(() => Agence, { nullable: true })
  async agence(
    @graphql.Args() args: AgenceFindUniqueArgs
  ): Promise<Agence | null> {
    const result = await this.service.agence(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Agence)
  async createAgence(@graphql.Args() args: CreateAgenceArgs): Promise<Agence> {
    return await this.service.createAgence({
      ...args,
      data: {
        ...args.data,

        structure: {
          connect: args.data.structure,
        },
      },
    });
  }

  @graphql.Mutation(() => Agence)
  async updateAgence(
    @graphql.Args() args: UpdateAgenceArgs
  ): Promise<Agence | null> {
    try {
      return await this.service.updateAgence({
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

  @graphql.Mutation(() => Agence)
  async deleteAgence(
    @graphql.Args() args: DeleteAgenceArgs
  ): Promise<Agence | null> {
    try {
      return await this.service.deleteAgence(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Structure, {
    nullable: true,
    name: "structure",
  })
  async getStructure(
    @graphql.Parent() parent: Agence
  ): Promise<Structure | null> {
    const result = await this.service.getStructure(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
