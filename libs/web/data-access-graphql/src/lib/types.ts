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

export type Location = {
  __typename?: 'Location';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mainImageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  open?: Maybe<Scalars['Boolean']>;
  rgbBackground?: Maybe<RgbBackground>;
  rgbBackgroundId: Scalars['String'];
  score?: Maybe<Scalars['Float']>;
};

export type LocationAvgAggregate = {
  __typename?: 'LocationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type LocationCountAggregate = {
  __typename?: 'LocationCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  mainImageUrl: Scalars['Int'];
  name: Scalars['Int'];
  open: Scalars['Int'];
  rgbBackgroundId: Scalars['Int'];
  score: Scalars['Int'];
};

export type LocationCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  mainImageUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  open?: InputMaybe<Scalars['Boolean']>;
  rgbBackground?: InputMaybe<RgbBackgroundCreateNestedOneWithoutLocationInput>;
  score?: InputMaybe<Scalars['Float']>;
};

export type LocationMaxAggregate = {
  __typename?: 'LocationMaxAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  mainImageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  open?: Maybe<Scalars['Boolean']>;
  rgbBackgroundId?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
};

export type LocationMinAggregate = {
  __typename?: 'LocationMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  mainImageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  open?: Maybe<Scalars['Boolean']>;
  rgbBackgroundId?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
};

export type LocationSumAggregate = {
  __typename?: 'LocationSumAggregate';
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Float']>;
};

export type LocationUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  mainImageUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  open?: InputMaybe<Scalars['Boolean']>;
  rgbBackground?: InputMaybe<RgbBackgroundUpdateOneWithoutLocationNestedInput>;
  score?: InputMaybe<Scalars['Float']>;
};

export type LocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  rgbBackgroundId?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLocation: Location;
  createUser: User;
  removeLocation: Location;
  removeUser: User;
  updateLocation: Location;
  updateUser: User;
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemoveLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  location: Location;
  locations: Array<Location>;
  user: User;
  users: Array<User>;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type RgbBackground = {
  __typename?: 'RgbBackground';
  b: Scalars['Int'];
  g: Scalars['Int'];
  id: Scalars['ID'];
  r: Scalars['Int'];
};

export type RgbBackgroundAvgAggregate = {
  __typename?: 'RgbBackgroundAvgAggregate';
  b?: Maybe<Scalars['Float']>;
  g?: Maybe<Scalars['Float']>;
  r?: Maybe<Scalars['Float']>;
};

export type RgbBackgroundCountAggregate = {
  __typename?: 'RgbBackgroundCountAggregate';
  _all: Scalars['Int'];
  b: Scalars['Int'];
  g: Scalars['Int'];
  id: Scalars['Int'];
  r: Scalars['Int'];
};

export type RgbBackgroundCreateNestedOneWithoutLocationInput = {
  connect?: InputMaybe<RgbBackgroundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbBackgroundCreateOrConnectWithoutLocationInput>;
  create?: InputMaybe<RgbBackgroundCreateWithoutLocationInput>;
};

export type RgbBackgroundCreateOrConnectWithoutLocationInput = {
  create: RgbBackgroundCreateWithoutLocationInput;
  where: RgbBackgroundWhereUniqueInput;
};

export type RgbBackgroundCreateWithoutLocationInput = {
  a?: InputMaybe<Scalars['Float']>;
  b: Scalars['Int'];
  g: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  r: Scalars['Int'];
};

export type RgbBackgroundMaxAggregate = {
  __typename?: 'RgbBackgroundMaxAggregate';
  b?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
};

export type RgbBackgroundMinAggregate = {
  __typename?: 'RgbBackgroundMinAggregate';
  b?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
};

export type RgbBackgroundSumAggregate = {
  __typename?: 'RgbBackgroundSumAggregate';
  b?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
};

export type RgbBackgroundUpdateOneWithoutLocationNestedInput = {
  connect?: InputMaybe<RgbBackgroundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbBackgroundCreateOrConnectWithoutLocationInput>;
  create?: InputMaybe<RgbBackgroundCreateWithoutLocationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<RgbBackgroundUpdateWithoutLocationInput>;
  upsert?: InputMaybe<RgbBackgroundUpsertWithoutLocationInput>;
};

export type RgbBackgroundUpdateWithoutLocationInput = {
  a?: InputMaybe<Scalars['Float']>;
  b?: InputMaybe<Scalars['Int']>;
  g?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  r?: InputMaybe<Scalars['Int']>;
};

export type RgbBackgroundUpsertWithoutLocationInput = {
  create: RgbBackgroundCreateWithoutLocationInput;
  update: RgbBackgroundUpdateWithoutLocationInput;
};

export type RgbBackgroundWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
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
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};
