export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BoolFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Location = {
  __typename?: 'Location';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type LocationAvgAggregate = {
  __typename?: 'LocationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type LocationCountAggregate = {
  __typename?: 'LocationCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  content: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Int'];
  title: Scalars['Int'];
};

export type LocationCreateManyAuthorInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type LocationCreateManyAuthorInputEnvelope = {
  data: Array<LocationCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LocationCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LocationCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<LocationCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<LocationCreateManyAuthorInputEnvelope>;
};

export type LocationCreateOrConnectWithoutAuthorInput = {
  create: LocationCreateWithoutAuthorInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateWithoutAuthorInput = {
  content?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type LocationMaxAggregate = {
  __typename?: 'LocationMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type LocationMinAggregate = {
  __typename?: 'LocationMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type LocationScalarWhereInput = {
  AND?: InputMaybe<Array<LocationScalarWhereInput>>;
  NOT?: InputMaybe<Array<LocationScalarWhereInput>>;
  OR?: InputMaybe<Array<LocationScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LocationSumAggregate = {
  __typename?: 'LocationSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type LocationUpdateManyMutationInput = {
  content?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type LocationUpdateManyWithWhereWithoutAuthorInput = {
  data: LocationUpdateManyMutationInput;
  where: LocationScalarWhereInput;
};

export type LocationUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LocationCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<LocationCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<LocationCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<LocationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LocationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  set?: InputMaybe<Array<LocationWhereUniqueInput>>;
  update?: InputMaybe<Array<LocationUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<LocationUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<LocationUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type LocationUpdateWithWhereUniqueWithoutAuthorInput = {
  data: LocationUpdateWithoutAuthorInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateWithoutAuthorInput = {
  content?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type LocationUpsertWithWhereUniqueWithoutAuthorInput = {
  create: LocationCreateWithoutAuthorInput;
  update: LocationUpdateWithoutAuthorInput;
  where: LocationWhereUniqueInput;
};

export type LocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  removeUser: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  email: Scalars['String'];
  id: Scalars['ID'];
  locations?: Maybe<Array<Location>>;
  name?: Maybe<Scalars['String']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  locations: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  locations?: InputMaybe<LocationCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  locations?: InputMaybe<LocationUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};
