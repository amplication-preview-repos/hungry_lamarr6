import { Module } from "@nestjs/common";
import { AssociationModule } from "./association/association.module";
import { FederationModule } from "./federation/federation.module";
import { AgenceModule } from "./agence/agence.module";
import { UtilisateurModule } from "./utilisateur/utilisateur.module";
import { AffectationModule } from "./affectation/affectation.module";
import { StructureModule } from "./structure/structure.module";
import { EnumStructureTypeFieldModule } from "./enumStructureTypeField/enumStructureTypeField.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AssociationModule,
    FederationModule,
    AgenceModule,
    UtilisateurModule,
    AffectationModule,
    StructureModule,
    EnumStructureTypeFieldModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
