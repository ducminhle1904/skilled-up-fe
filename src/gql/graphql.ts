/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type NoteInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type NoteMutation = {
  __typename?: 'NoteMutation';
  createNote: NoteType;
  deleteNote: Scalars['String']['output'];
  updateNote: NoteType;
};


export type NoteMutationCreateNoteArgs = {
  noteData: NoteInput;
};


export type NoteMutationDeleteNoteArgs = {
  noteId: Scalars['Int']['input'];
};


export type NoteMutationUpdateNoteArgs = {
  noteData: NoteInput;
  noteId: Scalars['Int']['input'];
};

export type NoteQuery = {
  __typename?: 'NoteQuery';
  getAll: Array<NoteType>;
  getById: NoteType;
};


export type NoteQueryGetByIdArgs = {
  id: Scalars['Int']['input'];
};

export type NoteType = {
  __typename?: 'NoteType';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};
