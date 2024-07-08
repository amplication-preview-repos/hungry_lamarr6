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
import { Utilisateur } from "./Utilisateur";
import { UtilisateurCountArgs } from "./UtilisateurCountArgs";
import { UtilisateurFindManyArgs } from "./UtilisateurFindManyArgs";
import { UtilisateurFindUniqueArgs } from "./UtilisateurFindUniqueArgs";
import { CreateUtilisateurArgs } from "./CreateUtilisateurArgs";
import { UpdateUtilisateurArgs } from "./UpdateUtilisateurArgs";
import { DeleteUtilisateurArgs } from "./DeleteUtilisateurArgs";
import { StructureFindManyArgs } from "../../structure/base/StructureFindManyArgs";
import { Structure } from "../../structure/base/Structure";
import { UtilisateurService } from "../utilisateur.service";
@graphql.Resolver(() => Utilisateur)
export class UtilisateurResolverBase {
  constructor(protected readonly service: UtilisateurService) {}

  async _utilisateursMeta(
    @graphql.Args() args: UtilisateurCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Utilisateur])
  async utilisateurs(
    @graphql.Args() args: UtilisateurFindManyArgs
  ): Promise<Utilisateur[]> {
    return this.service.utilisateurs(args);
  }

  @graphql.Query(() => Utilisateur, { nullable: true })
  async utilisateur(
    @graphql.Args() args: UtilisateurFindUniqueArgs
  ): Promise<Utilisateur | null> {
    const result = await this.service.utilisateur(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Utilisateur)
  async createUtilisateur(
    @graphql.Args() args: CreateUtilisateurArgs
  ): Promise<Utilisateur> {
    return await this.service.createUtilisateur({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Utilisateur)
  async updateUtilisateur(
    @graphql.Args() args: UpdateUtilisateurArgs
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.updateUtilisateur({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Utilisateur)
  async deleteUtilisateur(
    @graphql.Args() args: DeleteUtilisateurArgs
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.deleteUtilisateur(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Structure], { name: "structures" })
  async findStructures(
    @graphql.Parent() parent: Utilisateur,
    @graphql.Args() args: StructureFindManyArgs
  ): Promise<Structure[]> {
    const results = await this.service.findStructures(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
