import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password"
}

export enum RgbBackgroundScalarFieldEnum {
    id = "id",
    r = "r",
    g = "g",
    b = "b",
    a = "a"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum LocationScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    open = "open",
    score = "score",
    mainImageUrl = "mainImageUrl",
    rgbBackgroundId = "rgbBackgroundId"
}

registerEnumType(LocationScalarFieldEnum, { name: 'LocationScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(RgbBackgroundScalarFieldEnum, { name: 'RgbBackgroundScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateLocation {
    @Field(() => LocationCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LocationCountAggregate>;
    @Field(() => LocationAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LocationAvgAggregate>;
    @Field(() => LocationSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LocationSumAggregate>;
    @Field(() => LocationMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LocationMinAggregate>;
    @Field(() => LocationMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LocationMaxAggregate>;
}

@ArgsType()
export class CreateManyLocationArgs {
    @Field(() => [LocationCreateManyInput], {nullable:false})
    @Type(() => LocationCreateManyInput)
    @ValidateNested()
    data!: Array<LocationCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLocationArgs {
    @Field(() => LocationCreateInput, {nullable:false})
    @Type(() => LocationCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof LocationCreateInput>;
}

@ArgsType()
export class DeleteManyLocationArgs {
    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LocationWhereInput>;
}

@ArgsType()
export class DeleteOneLocationArgs {
    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof LocationWhereUniqueInput>;
}

@ArgsType()
export class FindFirstLocationOrThrowArgs {
    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LocationWhereInput>;
    @Field(() => [LocationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationOrderByWithRelationInput>;
    @Field(() => LocationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LocationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LocationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LocationScalarFieldEnum>;
}

@ArgsType()
export class FindFirstLocationArgs {
    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LocationWhereInput>;
    @Field(() => [LocationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationOrderByWithRelationInput>;
    @Field(() => LocationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LocationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LocationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LocationScalarFieldEnum>;
}

@ArgsType()
export class FindManyLocationArgs {
    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LocationWhereInput>;
    @Field(() => [LocationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationOrderByWithRelationInput>;
    @Field(() => LocationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LocationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LocationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LocationScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueLocationOrThrowArgs {
    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof LocationWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueLocationArgs {
    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof LocationWhereUniqueInput>;
}

@ArgsType()
export class LocationAggregateArgs {
    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LocationWhereInput>;
    @Field(() => [LocationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationOrderByWithRelationInput>;
    @Field(() => LocationWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LocationWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LocationCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LocationCountAggregateInput>;
    @Field(() => LocationAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LocationAvgAggregateInput>;
    @Field(() => LocationSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LocationSumAggregateInput>;
    @Field(() => LocationMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LocationMinAggregateInput>;
    @Field(() => LocationMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LocationMaxAggregateInput>;
}

@InputType()
export class LocationAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
}

@ObjectType()
export class LocationAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
}

@InputType()
export class LocationAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;
}

@InputType()
export class LocationCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    open?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
    @Field(() => Boolean, {nullable:true})
    mainImageUrl?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class LocationCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    open!: number;
    @Field(() => Int, {nullable:false})
    score!: number;
    @Field(() => Int, {nullable:false})
    mainImageUrl!: number;
    @Field(() => Int, {nullable:false})
    rgbBackgroundId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class LocationCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    open?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mainImageUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class LocationCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
}

@InputType()
export class LocationCreateNestedOneWithoutRgbBackgroundInput {
    @Field(() => LocationCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof LocationCreateWithoutRgbBackgroundInput>;
    @Field(() => LocationCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof LocationCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: InstanceType<typeof LocationWhereUniqueInput>;
}

@InputType()
export class LocationCreateOrConnectWithoutRgbBackgroundInput {
    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    where!: InstanceType<typeof LocationWhereUniqueInput>;
    @Field(() => LocationCreateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => LocationCreateWithoutRgbBackgroundInput)
    create!: InstanceType<typeof LocationCreateWithoutRgbBackgroundInput>;
}

@InputType()
export class LocationCreateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
}

@InputType()
export class LocationCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
    @Field(() => RgbBackgroundCreateNestedOneWithoutLocationInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundCreateNestedOneWithoutLocationInput>;
}

@ArgsType()
export class LocationGroupByArgs {
    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LocationWhereInput>;
    @Field(() => [LocationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LocationOrderByWithAggregationInput>;
    @Field(() => [LocationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LocationScalarFieldEnum>;
    @Field(() => LocationScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof LocationScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LocationCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LocationCountAggregateInput>;
    @Field(() => LocationAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LocationAvgAggregateInput>;
    @Field(() => LocationSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LocationSumAggregateInput>;
    @Field(() => LocationMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LocationMinAggregateInput>;
    @Field(() => LocationMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LocationMaxAggregateInput>;
}

@ObjectType()
export class LocationGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @Field(() => LocationCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LocationCountAggregate>;
    @Field(() => LocationAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LocationAvgAggregate>;
    @Field(() => LocationSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LocationSumAggregate>;
    @Field(() => LocationMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LocationMinAggregate>;
    @Field(() => LocationMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LocationMaxAggregate>;
}

@InputType()
export class LocationMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    open?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
    @Field(() => Boolean, {nullable:true})
    mainImageUrl?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
}

@ObjectType()
export class LocationMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class LocationMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    open?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mainImageUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class LocationMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    open?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
    @Field(() => Boolean, {nullable:true})
    mainImageUrl?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
}

@ObjectType()
export class LocationMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class LocationMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    open?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mainImageUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class LocationOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    open?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mainImageUrl?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
    @Field(() => LocationCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LocationCountOrderByAggregateInput>;
    @Field(() => LocationAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LocationAvgOrderByAggregateInput>;
    @Field(() => LocationMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LocationMaxOrderByAggregateInput>;
    @Field(() => LocationMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LocationMinOrderByAggregateInput>;
    @Field(() => LocationSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LocationSumOrderByAggregateInput>;
}

@InputType()
export class LocationOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    open?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mainImageUrl?: keyof typeof SortOrder;
    @Field(() => RgbBackgroundOrderByWithRelationInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class LocationRelationFilter {
    @Field(() => LocationWhereInput, {nullable:true})
    is?: InstanceType<typeof LocationWhereInput>;
    @Field(() => LocationWhereInput, {nullable:true})
    isNot?: InstanceType<typeof LocationWhereInput>;
}

@InputType()
export class LocationScalarWhereWithAggregatesInput {
    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocationScalarWhereWithAggregatesInput>;
    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocationScalarWhereWithAggregatesInput>;
    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocationScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    open?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    score?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    mainImageUrl?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class LocationSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
}

@ObjectType()
export class LocationSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
}

@InputType()
export class LocationSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;
}

@InputType()
export class LocationUncheckedCreateNestedOneWithoutRgbBackgroundInput {
    @Field(() => LocationCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof LocationCreateWithoutRgbBackgroundInput>;
    @Field(() => LocationCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof LocationCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: InstanceType<typeof LocationWhereUniqueInput>;
}

@InputType()
export class LocationUncheckedCreateWithoutRgbBackgroundInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
}

@InputType()
export class LocationUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
}

@InputType()
export class LocationUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class LocationUncheckedUpdateOneWithoutRgbBackgroundNestedInput {
    @Field(() => LocationCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof LocationCreateWithoutRgbBackgroundInput>;
    @Field(() => LocationCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof LocationCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => LocationUpsertWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationUpsertWithoutRgbBackgroundInput)
    upsert?: InstanceType<typeof LocationUpsertWithoutRgbBackgroundInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: InstanceType<typeof LocationWhereUniqueInput>;
    @Field(() => LocationUpdateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationUpdateWithoutRgbBackgroundInput)
    update?: InstanceType<typeof LocationUpdateWithoutRgbBackgroundInput>;
}

@InputType()
export class LocationUncheckedUpdateWithoutRgbBackgroundInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
}

@InputType()
export class LocationUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class LocationUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
}

@InputType()
export class LocationUpdateOneWithoutRgbBackgroundNestedInput {
    @Field(() => LocationCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof LocationCreateWithoutRgbBackgroundInput>;
    @Field(() => LocationCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof LocationCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => LocationUpsertWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationUpsertWithoutRgbBackgroundInput)
    upsert?: InstanceType<typeof LocationUpsertWithoutRgbBackgroundInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: InstanceType<typeof LocationWhereUniqueInput>;
    @Field(() => LocationUpdateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => LocationUpdateWithoutRgbBackgroundInput)
    update?: InstanceType<typeof LocationUpdateWithoutRgbBackgroundInput>;
}

@InputType()
export class LocationUpdateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
}

@InputType()
export class LocationUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(5)
    description?: string;
    @Field(() => Boolean, {nullable:true})
    open?: boolean;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    mainImageUrl?: string;
    @Field(() => RgbBackgroundUpdateOneWithoutLocationNestedInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundUpdateOneWithoutLocationNestedInput>;
}

@InputType()
export class LocationUpsertWithoutRgbBackgroundInput {
    @Field(() => LocationUpdateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => LocationUpdateWithoutRgbBackgroundInput)
    update!: InstanceType<typeof LocationUpdateWithoutRgbBackgroundInput>;
    @Field(() => LocationCreateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => LocationCreateWithoutRgbBackgroundInput)
    create!: InstanceType<typeof LocationCreateWithoutRgbBackgroundInput>;
}

@InputType()
export class LocationWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class LocationWhereInput {
    @Field(() => [LocationWhereInput], {nullable:true})
    AND?: Array<LocationWhereInput>;
    @Field(() => [LocationWhereInput], {nullable:true})
    OR?: Array<LocationWhereInput>;
    @Field(() => [LocationWhereInput], {nullable:true})
    NOT?: Array<LocationWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    open?: InstanceType<typeof BoolFilter>;
    @Field(() => FloatFilter, {nullable:true})
    score?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    mainImageUrl?: InstanceType<typeof StringFilter>;
    @Field(() => RgbBackgroundRelationFilter, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Location {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => Boolean, {nullable:true,defaultValue:false})
    open!: boolean | null;
    @Field(() => Float, {nullable:true})
    score!: number | null;
    @Field(() => String, {nullable:true})
    mainImageUrl!: string | null;
    @Field(() => RgbBackground, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackground> | null;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
}

@ArgsType()
export class UpdateManyLocationArgs {
    @Field(() => LocationUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof LocationUpdateManyMutationInput>;
    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LocationWhereInput>;
}

@ArgsType()
export class UpdateOneLocationArgs {
    @Field(() => LocationUpdateInput, {nullable:false})
    @Type(() => LocationUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof LocationUpdateInput>;
    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof LocationWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneLocationArgs {
    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof LocationWhereUniqueInput>;
    @Field(() => LocationCreateInput, {nullable:false})
    @Type(() => LocationCreateInput)
    create!: InstanceType<typeof LocationCreateInput>;
    @Field(() => LocationUpdateInput, {nullable:false})
    @Type(() => LocationUpdateInput)
    update!: InstanceType<typeof LocationUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolFilter, {nullable:true})
    not?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _min?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _max?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _sum?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _min?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _max?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateRgbBackground {
    @Field(() => RgbBackgroundCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregate>;
    @Field(() => RgbBackgroundAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregate>;
    @Field(() => RgbBackgroundSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregate>;
    @Field(() => RgbBackgroundMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregate>;
    @Field(() => RgbBackgroundMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregate>;
}

@ArgsType()
export class CreateManyRgbBackgroundArgs {
    @Field(() => [RgbBackgroundCreateManyInput], {nullable:false})
    @Type(() => RgbBackgroundCreateManyInput)
    @ValidateNested()
    data!: Array<RgbBackgroundCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundCreateInput, {nullable:false})
    @Type(() => RgbBackgroundCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbBackgroundCreateInput>;
}

@ArgsType()
export class DeleteManyRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@ArgsType()
export class DeleteOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@ArgsType()
export class FindFirstRgbBackgroundOrThrowArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
}

@ArgsType()
export class FindFirstRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
}

@ArgsType()
export class FindManyRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueRgbBackgroundOrThrowArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@ArgsType()
export class RgbBackgroundAggregateArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RgbBackgroundCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregateInput>;
    @Field(() => RgbBackgroundAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregateInput>;
    @Field(() => RgbBackgroundSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregateInput>;
    @Field(() => RgbBackgroundMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregateInput>;
    @Field(() => RgbBackgroundMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregateInput>;
}

@InputType()
export class RgbBackgroundAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbBackgroundAvgAggregate {
    @Field(() => Float, {nullable:true})
    r?: number;
    @Field(() => Float, {nullable:true})
    g?: number;
    @Field(() => Float, {nullable:true})
    b?: number;
    @HideField()
    a?: number;
}

@InputType()
export class RgbBackgroundAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RgbBackgroundCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @HideField()
    a!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RgbBackgroundCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundCreateNestedOneWithoutLocationInput {
    @Field(() => RgbBackgroundCreateWithoutLocationInput, {nullable:true})
    @Type(() => RgbBackgroundCreateWithoutLocationInput)
    create?: InstanceType<typeof RgbBackgroundCreateWithoutLocationInput>;
    @Field(() => RgbBackgroundCreateOrConnectWithoutLocationInput, {nullable:true})
    @Type(() => RgbBackgroundCreateOrConnectWithoutLocationInput)
    connectOrCreate?: InstanceType<typeof RgbBackgroundCreateOrConnectWithoutLocationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    @Type(() => RgbBackgroundWhereUniqueInput)
    connect?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@InputType()
export class RgbBackgroundCreateOrConnectWithoutLocationInput {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => RgbBackgroundCreateWithoutLocationInput, {nullable:false})
    @Type(() => RgbBackgroundCreateWithoutLocationInput)
    create!: InstanceType<typeof RgbBackgroundCreateWithoutLocationInput>;
}

@InputType()
export class RgbBackgroundCreateWithoutLocationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => LocationCreateNestedOneWithoutRgbBackgroundInput, {nullable:true})
    Location?: InstanceType<typeof LocationCreateNestedOneWithoutRgbBackgroundInput>;
}

@ArgsType()
export class RgbBackgroundGroupByArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithAggregationInput>;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
    @Field(() => RgbBackgroundScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RgbBackgroundCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregateInput>;
    @Field(() => RgbBackgroundAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregateInput>;
    @Field(() => RgbBackgroundSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregateInput>;
    @Field(() => RgbBackgroundMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregateInput>;
    @Field(() => RgbBackgroundMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregateInput>;
}

@ObjectType()
export class RgbBackgroundGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @HideField()
    a?: number;
    @Field(() => RgbBackgroundCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregate>;
    @Field(() => RgbBackgroundAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregate>;
    @Field(() => RgbBackgroundSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregate>;
    @Field(() => RgbBackgroundMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregate>;
    @Field(() => RgbBackgroundMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregate>;
}

@InputType()
export class RgbBackgroundMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbBackgroundMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @HideField()
    a?: number;
}

@InputType()
export class RgbBackgroundMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbBackgroundMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @HideField()
    a?: number;
}

@InputType()
export class RgbBackgroundMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => RgbBackgroundCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountOrderByAggregateInput>;
    @Field(() => RgbBackgroundAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgOrderByAggregateInput>;
    @Field(() => RgbBackgroundMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxOrderByAggregateInput>;
    @Field(() => RgbBackgroundMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinOrderByAggregateInput>;
    @Field(() => RgbBackgroundSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumOrderByAggregateInput>;
}

@InputType()
export class RgbBackgroundOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => LocationOrderByWithRelationInput, {nullable:true})
    Location?: InstanceType<typeof LocationOrderByWithRelationInput>;
}

@InputType()
export class RgbBackgroundRelationFilter {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    is?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    isNot?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@InputType()
export class RgbBackgroundScalarWhereWithAggregatesInput {
    @Field(() => [RgbBackgroundScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => [RgbBackgroundScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => [RgbBackgroundScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    r?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    g?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    b?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    a?: InstanceType<typeof FloatWithAggregatesFilter>;
}

@InputType()
export class RgbBackgroundSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbBackgroundSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @HideField()
    a?: number;
}

@InputType()
export class RgbBackgroundSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundUncheckedCreateWithoutLocationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => LocationUncheckedCreateNestedOneWithoutRgbBackgroundInput, {nullable:true})
    Location?: InstanceType<typeof LocationUncheckedCreateNestedOneWithoutRgbBackgroundInput>;
}

@InputType()
export class RgbBackgroundUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundUncheckedUpdateWithoutLocationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => LocationUncheckedUpdateOneWithoutRgbBackgroundNestedInput, {nullable:true})
    Location?: InstanceType<typeof LocationUncheckedUpdateOneWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbBackgroundUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundUpdateOneWithoutLocationNestedInput {
    @Field(() => RgbBackgroundCreateWithoutLocationInput, {nullable:true})
    @Type(() => RgbBackgroundCreateWithoutLocationInput)
    create?: InstanceType<typeof RgbBackgroundCreateWithoutLocationInput>;
    @Field(() => RgbBackgroundCreateOrConnectWithoutLocationInput, {nullable:true})
    @Type(() => RgbBackgroundCreateOrConnectWithoutLocationInput)
    connectOrCreate?: InstanceType<typeof RgbBackgroundCreateOrConnectWithoutLocationInput>;
    @Field(() => RgbBackgroundUpsertWithoutLocationInput, {nullable:true})
    @Type(() => RgbBackgroundUpsertWithoutLocationInput)
    upsert?: InstanceType<typeof RgbBackgroundUpsertWithoutLocationInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    @Type(() => RgbBackgroundWhereUniqueInput)
    connect?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => RgbBackgroundUpdateWithoutLocationInput, {nullable:true})
    @Type(() => RgbBackgroundUpdateWithoutLocationInput)
    update?: InstanceType<typeof RgbBackgroundUpdateWithoutLocationInput>;
}

@InputType()
export class RgbBackgroundUpdateWithoutLocationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => LocationUpdateOneWithoutRgbBackgroundNestedInput, {nullable:true})
    Location?: InstanceType<typeof LocationUpdateOneWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbBackgroundUpsertWithoutLocationInput {
    @Field(() => RgbBackgroundUpdateWithoutLocationInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateWithoutLocationInput)
    update!: InstanceType<typeof RgbBackgroundUpdateWithoutLocationInput>;
    @Field(() => RgbBackgroundCreateWithoutLocationInput, {nullable:false})
    @Type(() => RgbBackgroundCreateWithoutLocationInput)
    create!: InstanceType<typeof RgbBackgroundCreateWithoutLocationInput>;
}

@InputType()
export class RgbBackgroundWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class RgbBackgroundWhereInput {
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    AND?: Array<RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    OR?: Array<RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    NOT?: Array<RgbBackgroundWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    r?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    g?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    b?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    a?: InstanceType<typeof FloatFilter>;
    @Field(() => LocationRelationFilter, {nullable:true})
    Location?: InstanceType<typeof LocationRelationFilter>;
}

@ObjectType()
export class RgbBackground {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    r!: number;
    @Field(() => Int, {nullable:false})
    g!: number;
    @Field(() => Int, {nullable:false})
    b!: number;
    @HideField()
    a!: number | null;
    @HideField()
    Location?: InstanceType<typeof Location> | null;
}

@ArgsType()
export class UpdateManyRgbBackgroundArgs {
    @Field(() => RgbBackgroundUpdateManyMutationInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbBackgroundUpdateManyMutationInput>;
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@ArgsType()
export class UpdateOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundUpdateInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbBackgroundUpdateInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => RgbBackgroundCreateInput, {nullable:false})
    @Type(() => RgbBackgroundCreateInput)
    create!: InstanceType<typeof RgbBackgroundCreateInput>;
    @Field(() => RgbBackgroundUpdateInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateInput)
    update!: InstanceType<typeof RgbBackgroundUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password!: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @HideField()
    password!: string;
}
