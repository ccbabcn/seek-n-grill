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

export type LocationAvgAggregate = {
  __typename?: 'LocationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type LocationCountAggregate = {
  __typename?: 'LocationCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  id: Scalars['Int'];
  open: Scalars['Int'];
  score: Scalars['Int'];
  title: Scalars['Int'];
};

export type LocationMaxAggregate = {
  __typename?: 'LocationMaxAggregate';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  open?: Maybe<Scalars['Boolean']>;
  score?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type LocationMinAggregate = {
  __typename?: 'LocationMinAggregate';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  open?: Maybe<Scalars['Boolean']>;
  score?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type LocationSumAggregate = {
  __typename?: 'LocationSumAggregate';
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Float']>;
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
