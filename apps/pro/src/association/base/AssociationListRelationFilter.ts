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
import { AssociationWhereInput } from "./AssociationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AssociationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AssociationWhereInput,
  })
  @ValidateNested()
  @Type(() => AssociationWhereInput)
  @IsOptional()
  @Field(() => AssociationWhereInput, {
    nullable: true,
  })
  every?: AssociationWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssociationWhereInput,
  })
  @ValidateNested()
  @Type(() => AssociationWhereInput)
  @IsOptional()
  @Field(() => AssociationWhereInput, {
    nullable: true,
  })
  some?: AssociationWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssociationWhereInput,
  })
  @ValidateNested()
  @Type(() => AssociationWhereInput)
  @IsOptional()
  @Field(() => AssociationWhereInput, {
    nullable: true,
  })
  none?: AssociationWhereInput;
}
export { AssociationListRelationFilter as AssociationListRelationFilter };
