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
import { AgenceWhereInput } from "./AgenceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AgenceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AgenceWhereInput,
  })
  @ValidateNested()
  @Type(() => AgenceWhereInput)
  @IsOptional()
  @Field(() => AgenceWhereInput, {
    nullable: true,
  })
  every?: AgenceWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgenceWhereInput,
  })
  @ValidateNested()
  @Type(() => AgenceWhereInput)
  @IsOptional()
  @Field(() => AgenceWhereInput, {
    nullable: true,
  })
  some?: AgenceWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgenceWhereInput,
  })
  @ValidateNested()
  @Type(() => AgenceWhereInput)
  @IsOptional()
  @Field(() => AgenceWhereInput, {
    nullable: true,
  })
  none?: AgenceWhereInput;
}
export { AgenceListRelationFilter as AgenceListRelationFilter };
