/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FederationWhereUniqueInput } from "../../federation/base/FederationWhereUniqueInput";
import { AssociationWhereUniqueInput } from "../../association/base/AssociationWhereUniqueInput";
import { AgenceWhereUniqueInput } from "../../agence/base/AgenceWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../../utilisateur/base/UtilisateurWhereUniqueInput";

@InputType()
class StructureWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  code?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  affectationDomaine?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FederationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FederationWhereUniqueInput)
  @IsOptional()
  @Field(() => FederationWhereUniqueInput, {
    nullable: true,
  })
  federation?: FederationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => AssociationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssociationWhereUniqueInput)
  @IsOptional()
  @Field(() => AssociationWhereUniqueInput, {
    nullable: true,
  })
  association?: AssociationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => AgenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AgenceWhereUniqueInput)
  @IsOptional()
  @Field(() => AgenceWhereUniqueInput, {
    nullable: true,
  })
  agence?: AgenceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  libelle?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UtilisateurWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UtilisateurWhereUniqueInput)
  @IsOptional()
  @Field(() => UtilisateurWhereUniqueInput, {
    nullable: true,
  })
  utilisateur?: UtilisateurWhereUniqueInput;
}

export { StructureWhereInput as StructureWhereInput };