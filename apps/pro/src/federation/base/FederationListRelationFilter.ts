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
import { FederationWhereInput } from "./FederationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FederationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FederationWhereInput,
  })
  @ValidateNested()
  @Type(() => FederationWhereInput)
  @IsOptional()
  @Field(() => FederationWhereInput, {
    nullable: true,
  })
  every?: FederationWhereInput;

  @ApiProperty({
    required: false,
    type: () => FederationWhereInput,
  })
  @ValidateNested()
  @Type(() => FederationWhereInput)
  @IsOptional()
  @Field(() => FederationWhereInput, {
    nullable: true,
  })
  some?: FederationWhereInput;

  @ApiProperty({
    required: false,
    type: () => FederationWhereInput,
  })
  @ValidateNested()
  @Type(() => FederationWhereInput)
  @IsOptional()
  @Field(() => FederationWhereInput, {
    nullable: true,
  })
  none?: FederationWhereInput;
}
export { FederationListRelationFilter as FederationListRelationFilter };