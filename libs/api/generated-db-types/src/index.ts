import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  name = 'name',
  password = 'password',
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

export enum LocationScalarFieldEnum {
  id = 'id',
  title = 'title',
  content = 'content',
  published = 'published',
  authorId = 'authorId',
}

registerEnumType(LocationScalarFieldEnum, {
  name: 'LocationScalarFieldEnum',
  description: undefined,
});
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, {
  name: 'TransactionIsolationLevel',
  description: undefined,
});
registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});

@ObjectType()
export class AggregateLocation {
  @Field(() => LocationCountAggregate, { nullable: true })
  _count?: InstanceType<typeof LocationCountAggregate>;
  @Field(() => LocationAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof LocationAvgAggregate>;
  @Field(() => LocationSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof LocationSumAggregate>;
  @Field(() => LocationMinAggregate, { nullable: true })
  _min?: InstanceType<typeof LocationMinAggregate>;
  @Field(() => LocationMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof LocationMaxAggregate>;
}

@ArgsType()
export class CreateManyLocationArgs {
  @Field(() => [LocationCreateManyInput], { nullable: false })
  @Type(() => LocationCreateManyInput)
  @ValidateNested()
  data!: Array<LocationCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLocationArgs {
  @Field(() => LocationCreateInput, { nullable: false })
  @Type(() => LocationCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof LocationCreateInput>;
}

@ArgsType()
export class DeleteManyLocationArgs {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof LocationWhereInput>;
}

@ArgsType()
export class DeleteOneLocationArgs {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof LocationWhereUniqueInput>;
}

@ArgsType()
export class FindFirstLocationOrThrowArgs {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof LocationWhereInput>;
  @Field(() => [LocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LocationOrderByWithRelationInput>;
  @Field(() => LocationWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof LocationWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [LocationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof LocationScalarFieldEnum>;
}

@ArgsType()
export class FindFirstLocationArgs {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof LocationWhereInput>;
  @Field(() => [LocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LocationOrderByWithRelationInput>;
  @Field(() => LocationWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof LocationWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [LocationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof LocationScalarFieldEnum>;
}

@ArgsType()
export class FindManyLocationArgs {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof LocationWhereInput>;
  @Field(() => [LocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LocationOrderByWithRelationInput>;
  @Field(() => LocationWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof LocationWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [LocationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof LocationScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueLocationOrThrowArgs {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof LocationWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueLocationArgs {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof LocationWhereUniqueInput>;
}

@ArgsType()
export class LocationAggregateArgs {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof LocationWhereInput>;
  @Field(() => [LocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LocationOrderByWithRelationInput>;
  @Field(() => LocationWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof LocationWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => LocationCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof LocationCountAggregateInput>;
  @Field(() => LocationAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof LocationAvgAggregateInput>;
  @Field(() => LocationSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof LocationSumAggregateInput>;
  @Field(() => LocationMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof LocationMinAggregateInput>;
  @Field(() => LocationMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof LocationMaxAggregateInput>;
}

@InputType()
export class LocationAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
}

@ObjectType()
export class LocationAvgAggregate {
  @Field(() => Float, { nullable: true })
  id?: number;
}

@InputType()
export class LocationAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
}

@InputType()
export class LocationCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  content?: true;
  @Field(() => Boolean, { nullable: true })
  published?: true;
  @Field(() => Boolean, { nullable: true })
  authorId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class LocationCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  title!: number;
  @Field(() => Int, { nullable: false })
  content!: number;
  @Field(() => Int, { nullable: false })
  published!: number;
  @Field(() => Int, { nullable: false })
  authorId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class LocationCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  published?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;
}

@InputType()
export class LocationCreateManyAuthorInputEnvelope {
  @Field(() => [LocationCreateManyAuthorInput], { nullable: false })
  @Type(() => LocationCreateManyAuthorInput)
  data!: Array<LocationCreateManyAuthorInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class LocationCreateManyAuthorInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}

@InputType()
export class LocationCreateManyInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
  @Field(() => String, { nullable: true })
  authorId?: string;
}

@InputType()
export class LocationCreateNestedManyWithoutAuthorInput {
  @Field(() => [LocationCreateWithoutAuthorInput], { nullable: true })
  @Type(() => LocationCreateWithoutAuthorInput)
  create?: Array<LocationCreateWithoutAuthorInput>;
  @Field(() => [LocationCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => LocationCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<LocationCreateOrConnectWithoutAuthorInput>;
  @Field(() => LocationCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => LocationCreateManyAuthorInputEnvelope)
  createMany?: InstanceType<typeof LocationCreateManyAuthorInputEnvelope>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  connect?: Array<LocationWhereUniqueInput>;
}

@InputType()
export class LocationCreateOrConnectWithoutAuthorInput {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  where!: InstanceType<typeof LocationWhereUniqueInput>;
  @Field(() => LocationCreateWithoutAuthorInput, { nullable: false })
  @Type(() => LocationCreateWithoutAuthorInput)
  create!: InstanceType<typeof LocationCreateWithoutAuthorInput>;
}

@InputType()
export class LocationCreateWithoutAuthorInput {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}

@InputType()
export class LocationCreateInput {
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
  @Field(() => UserCreateNestedOneWithoutLocationsInput, { nullable: true })
  author?: InstanceType<typeof UserCreateNestedOneWithoutLocationsInput>;
}

@ArgsType()
export class LocationGroupByArgs {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof LocationWhereInput>;
  @Field(() => [LocationOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<LocationOrderByWithAggregationInput>;
  @Field(() => [LocationScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof LocationScalarFieldEnum>;
  @Field(() => LocationScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof LocationScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => LocationCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof LocationCountAggregateInput>;
  @Field(() => LocationAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof LocationAvgAggregateInput>;
  @Field(() => LocationSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof LocationSumAggregateInput>;
  @Field(() => LocationMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof LocationMinAggregateInput>;
  @Field(() => LocationMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof LocationMaxAggregateInput>;
}

@ObjectType()
export class LocationGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
  @Field(() => String, { nullable: true })
  authorId?: string;
  @Field(() => LocationCountAggregate, { nullable: true })
  _count?: InstanceType<typeof LocationCountAggregate>;
  @Field(() => LocationAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof LocationAvgAggregate>;
  @Field(() => LocationSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof LocationSumAggregate>;
  @Field(() => LocationMinAggregate, { nullable: true })
  _min?: InstanceType<typeof LocationMinAggregate>;
  @Field(() => LocationMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof LocationMaxAggregate>;
}

@InputType()
export class LocationListRelationFilter {
  @Field(() => LocationWhereInput, { nullable: true })
  every?: InstanceType<typeof LocationWhereInput>;
  @Field(() => LocationWhereInput, { nullable: true })
  some?: InstanceType<typeof LocationWhereInput>;
  @Field(() => LocationWhereInput, { nullable: true })
  none?: InstanceType<typeof LocationWhereInput>;
}

@InputType()
export class LocationMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  content?: true;
  @Field(() => Boolean, { nullable: true })
  published?: true;
  @Field(() => Boolean, { nullable: true })
  authorId?: true;
}

@ObjectType()
export class LocationMaxAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
  @Field(() => String, { nullable: true })
  authorId?: string;
}

@InputType()
export class LocationMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  published?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;
}

@InputType()
export class LocationMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  content?: true;
  @Field(() => Boolean, { nullable: true })
  published?: true;
  @Field(() => Boolean, { nullable: true })
  authorId?: true;
}

@ObjectType()
export class LocationMinAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
  @Field(() => String, { nullable: true })
  authorId?: string;
}

@InputType()
export class LocationMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  published?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;
}

@InputType()
export class LocationOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class LocationOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  published?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;
  @Field(() => LocationCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof LocationCountOrderByAggregateInput>;
  @Field(() => LocationAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof LocationAvgOrderByAggregateInput>;
  @Field(() => LocationMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof LocationMaxOrderByAggregateInput>;
  @Field(() => LocationMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof LocationMinOrderByAggregateInput>;
  @Field(() => LocationSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof LocationSumOrderByAggregateInput>;
}

@InputType()
export class LocationOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  published?: keyof typeof SortOrder;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  author?: InstanceType<typeof UserOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;
}

@InputType()
export class LocationScalarWhereWithAggregatesInput {
  @Field(() => [LocationScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<LocationScalarWhereWithAggregatesInput>;
  @Field(() => [LocationScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<LocationScalarWhereWithAggregatesInput>;
  @Field(() => [LocationScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<LocationScalarWhereWithAggregatesInput>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  content?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  published?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  authorId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class LocationScalarWhereInput {
  @Field(() => [LocationScalarWhereInput], { nullable: true })
  AND?: Array<LocationScalarWhereInput>;
  @Field(() => [LocationScalarWhereInput], { nullable: true })
  OR?: Array<LocationScalarWhereInput>;
  @Field(() => [LocationScalarWhereInput], { nullable: true })
  NOT?: Array<LocationScalarWhereInput>;
  @Field(() => IntFilter, { nullable: true })
  id?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  content?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  published?: InstanceType<typeof BoolFilter>;
  @Field(() => StringFilter, { nullable: true })
  authorId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class LocationSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
}

@ObjectType()
export class LocationSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;
}

@InputType()
export class LocationSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
}

@InputType()
export class LocationUncheckedCreateNestedManyWithoutAuthorInput {
  @Field(() => [LocationCreateWithoutAuthorInput], { nullable: true })
  @Type(() => LocationCreateWithoutAuthorInput)
  create?: Array<LocationCreateWithoutAuthorInput>;
  @Field(() => [LocationCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => LocationCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<LocationCreateOrConnectWithoutAuthorInput>;
  @Field(() => LocationCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => LocationCreateManyAuthorInputEnvelope)
  createMany?: InstanceType<typeof LocationCreateManyAuthorInputEnvelope>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  connect?: Array<LocationWhereUniqueInput>;
}

@InputType()
export class LocationUncheckedCreateWithoutAuthorInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}

@InputType()
export class LocationUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
  @Field(() => String, { nullable: true })
  authorId?: string;
}

@InputType()
export class LocationUncheckedUpdateManyWithoutAuthorNestedInput {
  @Field(() => [LocationCreateWithoutAuthorInput], { nullable: true })
  @Type(() => LocationCreateWithoutAuthorInput)
  create?: Array<LocationCreateWithoutAuthorInput>;
  @Field(() => [LocationCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => LocationCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<LocationCreateOrConnectWithoutAuthorInput>;
  @Field(() => [LocationUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LocationUpsertWithWhereUniqueWithoutAuthorInput)
  upsert?: Array<LocationUpsertWithWhereUniqueWithoutAuthorInput>;
  @Field(() => LocationCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => LocationCreateManyAuthorInputEnvelope)
  createMany?: InstanceType<typeof LocationCreateManyAuthorInputEnvelope>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  set?: Array<LocationWhereUniqueInput>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  disconnect?: Array<LocationWhereUniqueInput>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  delete?: Array<LocationWhereUniqueInput>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  connect?: Array<LocationWhereUniqueInput>;
  @Field(() => [LocationUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LocationUpdateWithWhereUniqueWithoutAuthorInput)
  update?: Array<LocationUpdateWithWhereUniqueWithoutAuthorInput>;
  @Field(() => [LocationUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LocationUpdateManyWithWhereWithoutAuthorInput)
  updateMany?: Array<LocationUpdateManyWithWhereWithoutAuthorInput>;
  @Field(() => [LocationScalarWhereInput], { nullable: true })
  @Type(() => LocationScalarWhereInput)
  deleteMany?: Array<LocationScalarWhereInput>;
}

@InputType()
export class LocationUncheckedUpdateManyWithoutLocationsInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}

@InputType()
export class LocationUncheckedUpdateManyInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
  @Field(() => String, { nullable: true })
  authorId?: string;
}

@InputType()
export class LocationUncheckedUpdateWithoutAuthorInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}

@InputType()
export class LocationUncheckedUpdateInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
  @Field(() => String, { nullable: true })
  authorId?: string;
}

@InputType()
export class LocationUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}

@InputType()
export class LocationUpdateManyWithWhereWithoutAuthorInput {
  @Field(() => LocationScalarWhereInput, { nullable: false })
  @Type(() => LocationScalarWhereInput)
  where!: InstanceType<typeof LocationScalarWhereInput>;
  @Field(() => LocationUpdateManyMutationInput, { nullable: false })
  @Type(() => LocationUpdateManyMutationInput)
  data!: InstanceType<typeof LocationUpdateManyMutationInput>;
}

@InputType()
export class LocationUpdateManyWithoutAuthorNestedInput {
  @Field(() => [LocationCreateWithoutAuthorInput], { nullable: true })
  @Type(() => LocationCreateWithoutAuthorInput)
  create?: Array<LocationCreateWithoutAuthorInput>;
  @Field(() => [LocationCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => LocationCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<LocationCreateOrConnectWithoutAuthorInput>;
  @Field(() => [LocationUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LocationUpsertWithWhereUniqueWithoutAuthorInput)
  upsert?: Array<LocationUpsertWithWhereUniqueWithoutAuthorInput>;
  @Field(() => LocationCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => LocationCreateManyAuthorInputEnvelope)
  createMany?: InstanceType<typeof LocationCreateManyAuthorInputEnvelope>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  set?: Array<LocationWhereUniqueInput>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  disconnect?: Array<LocationWhereUniqueInput>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  delete?: Array<LocationWhereUniqueInput>;
  @Field(() => [LocationWhereUniqueInput], { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  connect?: Array<LocationWhereUniqueInput>;
  @Field(() => [LocationUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LocationUpdateWithWhereUniqueWithoutAuthorInput)
  update?: Array<LocationUpdateWithWhereUniqueWithoutAuthorInput>;
  @Field(() => [LocationUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LocationUpdateManyWithWhereWithoutAuthorInput)
  updateMany?: Array<LocationUpdateManyWithWhereWithoutAuthorInput>;
  @Field(() => [LocationScalarWhereInput], { nullable: true })
  @Type(() => LocationScalarWhereInput)
  deleteMany?: Array<LocationScalarWhereInput>;
}

@InputType()
export class LocationUpdateWithWhereUniqueWithoutAuthorInput {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  where!: InstanceType<typeof LocationWhereUniqueInput>;
  @Field(() => LocationUpdateWithoutAuthorInput, { nullable: false })
  @Type(() => LocationUpdateWithoutAuthorInput)
  data!: InstanceType<typeof LocationUpdateWithoutAuthorInput>;
}

@InputType()
export class LocationUpdateWithoutAuthorInput {
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}

@InputType()
export class LocationUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean, { nullable: true })
  published?: boolean;
  @Field(() => UserUpdateOneWithoutLocationsNestedInput, { nullable: true })
  author?: InstanceType<typeof UserUpdateOneWithoutLocationsNestedInput>;
}

@InputType()
export class LocationUpsertWithWhereUniqueWithoutAuthorInput {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  where!: InstanceType<typeof LocationWhereUniqueInput>;
  @Field(() => LocationUpdateWithoutAuthorInput, { nullable: false })
  @Type(() => LocationUpdateWithoutAuthorInput)
  update!: InstanceType<typeof LocationUpdateWithoutAuthorInput>;
  @Field(() => LocationCreateWithoutAuthorInput, { nullable: false })
  @Type(() => LocationCreateWithoutAuthorInput)
  create!: InstanceType<typeof LocationCreateWithoutAuthorInput>;
}

@InputType()
export class LocationWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;
}

@InputType()
export class LocationWhereInput {
  @Field(() => [LocationWhereInput], { nullable: true })
  AND?: Array<LocationWhereInput>;
  @Field(() => [LocationWhereInput], { nullable: true })
  OR?: Array<LocationWhereInput>;
  @Field(() => [LocationWhereInput], { nullable: true })
  NOT?: Array<LocationWhereInput>;
  @Field(() => IntFilter, { nullable: true })
  id?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  content?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  published?: InstanceType<typeof BoolFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  author?: InstanceType<typeof UserRelationFilter>;
  @Field(() => StringFilter, { nullable: true })
  authorId?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Location {
  @Field(() => ID, { nullable: false })
  id!: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  content!: string | null;
  @Field(() => Boolean, { nullable: true, defaultValue: false })
  published!: boolean | null;
  @Field(() => User, { nullable: true })
  author?: InstanceType<typeof User> | null;
  @Field(() => String, { nullable: true })
  authorId!: string | null;
}

@ArgsType()
export class UpdateManyLocationArgs {
  @Field(() => LocationUpdateManyMutationInput, { nullable: false })
  @Type(() => LocationUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof LocationUpdateManyMutationInput>;
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof LocationWhereInput>;
}

@ArgsType()
export class UpdateOneLocationArgs {
  @Field(() => LocationUpdateInput, { nullable: false })
  @Type(() => LocationUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof LocationUpdateInput>;
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof LocationWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneLocationArgs {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof LocationWhereUniqueInput>;
  @Field(() => LocationCreateInput, { nullable: false })
  @Type(() => LocationCreateInput)
  create!: InstanceType<typeof LocationCreateInput>;
  @Field(() => LocationUpdateInput, { nullable: false })
  @Type(() => LocationUpdateInput)
  update!: InstanceType<typeof LocationUpdateInput>;
}

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => BoolFilter, { nullable: true })
  not?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => BoolFilter, { nullable: true })
  _min?: InstanceType<typeof BoolFilter>;
  @Field(() => BoolFilter, { nullable: true })
  _max?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class FloatFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => FloatFilter, { nullable: true })
  not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof FloatWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _avg?: InstanceType<typeof FloatFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _sum?: InstanceType<typeof FloatFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _min?: InstanceType<typeof FloatFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _max?: InstanceType<typeof FloatFilter>;
}
@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => IntFilter, { nullable: true })
  not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _avg?: InstanceType<typeof FloatFilter>;
  @Field(() => IntFilter, { nullable: true })
  _sum?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  _min?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => StringFilter, { nullable: true })
  not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  _min?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateUser {
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
  @Field(() => [UserCreateManyInput], { nullable: false })
  @Type(() => UserCreateManyInput)
  @ValidateNested()
  data!: Array<UserCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof UserUpdateInput>;
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  create!: InstanceType<typeof UserCreateInput>;
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  email!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @HideField()
  password!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
  @Field(() => Int, { nullable: false })
  locations?: number;
}

@InputType()
export class UserCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password!: string;
}

@InputType()
export class UserCreateNestedOneWithoutLocationsInput {
  @Field(() => UserCreateWithoutLocationsInput, { nullable: true })
  @Type(() => UserCreateWithoutLocationsInput)
  create?: InstanceType<typeof UserCreateWithoutLocationsInput>;
  @Field(() => UserCreateOrConnectWithoutLocationsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutLocationsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutLocationsInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutLocationsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserCreateWithoutLocationsInput, { nullable: false })
  @Type(() => UserCreateWithoutLocationsInput)
  create!: InstanceType<typeof UserCreateWithoutLocationsInput>;
}

@InputType()
export class UserCreateWithoutLocationsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password!: string;
}

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password!: string;
  @Field(() => LocationCreateNestedManyWithoutAuthorInput, { nullable: true })
  locations?: InstanceType<typeof LocationCreateNestedManyWithoutAuthorInput>;
}

@ArgsType()
export class UserGroupByArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithAggregationInput>;
  @Field(() => [UserScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserScalarFieldEnum>;
  @Field(() => UserScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @HideField()
  password!: string;
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
}

@ObjectType()
export class UserMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @HideField()
  password?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
}

@ObjectType()
export class UserMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @HideField()
  password?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @Field(() => LocationOrderByRelationAggregateInput, { nullable: true })
  locations?: InstanceType<typeof LocationOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutLocationsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password!: string;
}

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password!: string;
  @Field(() => LocationUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  locations?: InstanceType<
    typeof LocationUncheckedCreateNestedManyWithoutAuthorInput
  >;
}

@InputType()
export class UserUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password?: string;
}

@InputType()
export class UserUncheckedUpdateWithoutLocationsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password?: string;
}

@InputType()
export class UserUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password?: string;
  @Field(() => LocationUncheckedUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  locations?: InstanceType<
    typeof LocationUncheckedUpdateManyWithoutAuthorNestedInput
  >;
}

@InputType()
export class UserUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password?: string;
}

@InputType()
export class UserUpdateOneWithoutLocationsNestedInput {
  @Field(() => UserCreateWithoutLocationsInput, { nullable: true })
  @Type(() => UserCreateWithoutLocationsInput)
  create?: InstanceType<typeof UserCreateWithoutLocationsInput>;
  @Field(() => UserCreateOrConnectWithoutLocationsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutLocationsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutLocationsInput
  >;
  @Field(() => UserUpsertWithoutLocationsInput, { nullable: true })
  @Type(() => UserUpsertWithoutLocationsInput)
  upsert?: InstanceType<typeof UserUpsertWithoutLocationsInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserUpdateWithoutLocationsInput, { nullable: true })
  @Type(() => UserUpdateWithoutLocationsInput)
  update?: InstanceType<typeof UserUpdateWithoutLocationsInput>;
}

@InputType()
export class UserUpdateWithoutLocationsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password?: string;
}

@InputType()
export class UserUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(3)
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MaxLength(8)
  password?: string;
  @Field(() => LocationUpdateManyWithoutAuthorNestedInput, { nullable: true })
  locations?: InstanceType<typeof LocationUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpsertWithoutLocationsInput {
  @Field(() => UserUpdateWithoutLocationsInput, { nullable: false })
  @Type(() => UserUpdateWithoutLocationsInput)
  update!: InstanceType<typeof UserUpdateWithoutLocationsInput>;
  @Field(() => UserCreateWithoutLocationsInput, { nullable: false })
  @Type(() => UserCreateWithoutLocationsInput)
  create!: InstanceType<typeof UserCreateWithoutLocationsInput>;
}

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
}

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @Field(() => LocationListRelationFilter, { nullable: true })
  locations?: InstanceType<typeof LocationListRelationFilter>;
}

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  name!: string | null;
  @HideField()
  password!: string;
  @Field(() => [Location], { nullable: true })
  locations?: Array<Location>;
  @Field(() => UserCount, { nullable: false })
  _count?: InstanceType<typeof UserCount>;
}
