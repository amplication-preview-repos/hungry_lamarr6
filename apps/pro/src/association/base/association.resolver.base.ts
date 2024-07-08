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
import { Association } from "./Association";
import { AssociationCountArgs } from "./AssociationCountArgs";
import { AssociationFindManyArgs } from "./AssociationFindManyArgs";
import { AssociationFindUniqueArgs } from "./AssociationFindUniqueArgs";
import { CreateAssociationArgs } from "./CreateAssociationArgs";
import { UpdateAssociationArgs } from "./UpdateAssociationArgs";
import { DeleteAssociationArgs } from "./DeleteAssociationArgs";
import { Structure } from "../../structure/base/Structure";
import { AssociationService } from "../association.service";
@graphql.Resolver(() => Association)
export class AssociationResolverBase {
  constructor(protected readonly service: AssociationService) {}

  async _associationsMeta(
    @graphql.Args() args: AssociationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Association])
  async associations(
    @graphql.Args() args: AssociationFindManyArgs
  ): Promise<Association[]> {
    return this.service.associations(args);
  }

  @graphql.Query(() => Association, { nullable: true })
  async association(
    @graphql.Args() args: AssociationFindUniqueArgs
  ): Promise<Association | null> {
    const result = await this.service.association(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Association)
  async createAssociation(
    @graphql.Args() args: CreateAssociationArgs
  ): Promise<Association> {
    return await this.service.createAssociation({
      ...args,
      data: {
        ...args.data,

        structure: {
          connect: args.data.structure,
        },
      },
    });
  }

  @graphql.Mutation(() => Association)
  async updateAssociation(
    @graphql.Args() args: UpdateAssociationArgs
  ): Promise<Association | null> {
    try {
      return await this.service.updateAssociation({
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

  @graphql.Mutation(() => Association)
  async deleteAssociation(
    @graphql.Args() args: DeleteAssociationArgs
  ): Promise<Association | null> {
    try {
      return await this.service.deleteAssociation(args);
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
    @graphql.Parent() parent: Association
  ): Promise<Structure | null> {
    const result = await this.service.getStructure(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
