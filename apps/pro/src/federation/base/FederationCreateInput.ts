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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { StructureWhereUniqueInput } from "../../structure/base/StructureWhereUniqueInput";
import { Type } from "class-transformer";
import { AssociationCreateNestedManyWithoutFederationsInput } from "./AssociationCreateNestedManyWithoutFederationsInput";

@InputType()
class FederationCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  affectationDomaine?: string | null;

  @ApiProperty({
    required: true,
    type: () => StructureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StructureWhereUniqueInput)
  @Field(() => StructureWhereUniqueInput)
  structure!: StructureWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => AssociationCreateNestedManyWithoutFederationsInput,
  })
  @ValidateNested()
  @Type(() => AssociationCreateNestedManyWithoutFederationsInput)
  @IsOptional()
  @Field(() => AssociationCreateNestedManyWithoutFederationsInput, {
    nullable: true,
  })
  associations?: AssociationCreateNestedManyWithoutFederationsInput;
}

export { FederationCreateInput as FederationCreateInput };
