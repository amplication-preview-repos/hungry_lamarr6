/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumStructureTypeFieldWhereInput } from "./EnumStructureTypeFieldWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EnumStructureTypeFieldOrderByInput } from "./EnumStructureTypeFieldOrderByInput";

@ArgsType()
class EnumStructureTypeFieldFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EnumStructureTypeFieldWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EnumStructureTypeFieldWhereInput, { nullable: true })
  @Type(() => EnumStructureTypeFieldWhereInput)
  where?: EnumStructureTypeFieldWhereInput;

  @ApiProperty({
    required: false,
    type: [EnumStructureTypeFieldOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EnumStructureTypeFieldOrderByInput], { nullable: true })
  @Type(() => EnumStructureTypeFieldOrderByInput)
  orderBy?: Array<EnumStructureTypeFieldOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EnumStructureTypeFieldFindManyArgs as EnumStructureTypeFieldFindManyArgs };
