import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  geography: any;
  geometry: any;
  timestamptz: any;
};

export type Chat = {
  __typename?: 'Chat';
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type From = {
  __typename?: 'From';
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_bot?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type PhotoResponse = {
  __typename?: 'PhotoResponse';
  ok?: Maybe<Scalars['Boolean']>;
  result?: Maybe<PhotoResult>;
};

export type PhotoResult = {
  __typename?: 'PhotoResult';
  file_id?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  file_size?: Maybe<Scalars['Int']>;
  file_unique_id?: Maybe<Scalars['String']>;
};

export type Result = {
  __typename?: 'Result';
  chat?: Maybe<Chat>;
  date?: Maybe<Scalars['Int']>;
  from?: Maybe<From>;
  message_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type T_AskForLocation = {
  __typename?: 'T_AskForLocation';
  ok?: Maybe<Scalars['Boolean']>;
  result?: Maybe<Result>;
};

export type Geography_Cast_Exp = {
  geometry?: InputMaybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: InputMaybe<Geography_Cast_Exp>;
  _eq?: InputMaybe<Scalars['geography']>;
  _gt?: InputMaybe<Scalars['geography']>;
  _gte?: InputMaybe<Scalars['geography']>;
  _in?: InputMaybe<Array<Scalars['geography']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['geography']>;
  _lte?: InputMaybe<Scalars['geography']>;
  _neq?: InputMaybe<Scalars['geography']>;
  _nin?: InputMaybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: InputMaybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: InputMaybe<Scalars['geography']>;
};

export type Geometry_Cast_Exp = {
  geography?: InputMaybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: InputMaybe<Geometry_Cast_Exp>;
  _eq?: InputMaybe<Scalars['geometry']>;
  _gt?: InputMaybe<Scalars['geometry']>;
  _gte?: InputMaybe<Scalars['geometry']>;
  _in?: InputMaybe<Array<Scalars['geometry']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['geometry']>;
  _lte?: InputMaybe<Scalars['geometry']>;
  _neq?: InputMaybe<Scalars['geometry']>;
  _nin?: InputMaybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: InputMaybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: InputMaybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains?: InputMaybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses?: InputMaybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: InputMaybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: InputMaybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: InputMaybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: InputMaybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: InputMaybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: InputMaybe<Scalars['geometry']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "report" */
  delete_report?: Maybe<Report_Mutation_Response>;
  /** delete single row from the table: "report" */
  delete_report_by_pk?: Maybe<Report>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "report" */
  insert_report?: Maybe<Report_Mutation_Response>;
  /** insert a single row into the table: "report" */
  insert_report_one?: Maybe<Report>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "report" */
  update_report?: Maybe<Report_Mutation_Response>;
  /** update single row of the table: "report" */
  update_report_by_pk?: Maybe<Report>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_ReportArgs = {
  where: Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Report_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ReportArgs = {
  objects: Array<Report_Insert_Input>;
  on_conflict?: InputMaybe<Report_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Report_OneArgs = {
  object: Report_Insert_Input;
  on_conflict?: InputMaybe<Report_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ReportArgs = {
  _inc?: InputMaybe<Report_Inc_Input>;
  _set?: InputMaybe<Report_Set_Input>;
  where: Report_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Report_By_PkArgs = {
  _inc?: InputMaybe<Report_Inc_Input>;
  _set?: InputMaybe<Report_Set_Input>;
  pk_columns: Report_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: Report_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** Ask for Location */
  t_askForLocation?: Maybe<T_AskForLocation>;
  /** Say thanks for location */
  t_closeKeyboard?: Maybe<T_AskForLocation>;
  /** Get Photo */
  t_getPhoto?: Maybe<PhotoResponse>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootReportArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


export type Query_RootReport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


export type Query_RootReport_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootT_AskForLocationArgs = {
  chat_id: Scalars['String'];
};


export type Query_RootT_CloseKeyboardArgs = {
  chat_id: Scalars['String'];
  message: Scalars['String'];
};


export type Query_RootT_GetPhotoArgs = {
  photo_id: Scalars['String'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "report" */
export type Report = {
  __typename?: 'report';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  image_url?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['geometry']>;
  message?: Maybe<Scalars['String']>;
  t_message_id: Scalars['String'];
  t_update_id: Scalars['String'];
  t_user_id: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: User;
};

/** aggregated selection of "report" */
export type Report_Aggregate = {
  __typename?: 'report_aggregate';
  aggregate?: Maybe<Report_Aggregate_Fields>;
  nodes: Array<Report>;
};

/** aggregate fields of "report" */
export type Report_Aggregate_Fields = {
  __typename?: 'report_aggregate_fields';
  avg?: Maybe<Report_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Report_Max_Fields>;
  min?: Maybe<Report_Min_Fields>;
  stddev?: Maybe<Report_Stddev_Fields>;
  stddev_pop?: Maybe<Report_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Report_Stddev_Samp_Fields>;
  sum?: Maybe<Report_Sum_Fields>;
  var_pop?: Maybe<Report_Var_Pop_Fields>;
  var_samp?: Maybe<Report_Var_Samp_Fields>;
  variance?: Maybe<Report_Variance_Fields>;
};


/** aggregate fields of "report" */
export type Report_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Report_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "report" */
export type Report_Aggregate_Order_By = {
  avg?: InputMaybe<Report_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Report_Max_Order_By>;
  min?: InputMaybe<Report_Min_Order_By>;
  stddev?: InputMaybe<Report_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Report_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Report_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Report_Sum_Order_By>;
  var_pop?: InputMaybe<Report_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Report_Var_Samp_Order_By>;
  variance?: InputMaybe<Report_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "report" */
export type Report_Arr_Rel_Insert_Input = {
  data: Array<Report_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Report_On_Conflict>;
};

/** aggregate avg on columns */
export type Report_Avg_Fields = {
  __typename?: 'report_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "report" */
export type Report_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "report". All fields are combined with a logical 'AND'. */
export type Report_Bool_Exp = {
  _and?: InputMaybe<Array<Report_Bool_Exp>>;
  _not?: InputMaybe<Report_Bool_Exp>;
  _or?: InputMaybe<Array<Report_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<Geometry_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  t_message_id?: InputMaybe<String_Comparison_Exp>;
  t_update_id?: InputMaybe<String_Comparison_Exp>;
  t_user_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "report" */
export enum Report_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReportPkey = 'Report_pkey',
  /** unique or primary key constraint on columns "t_update_id" */
  ReportTUpdateIdKey = 'Report_t_update_id_key',
  /** unique or primary key constraint on columns "t_message_id" */
  ReportTMessageIdKey = 'report_t_message_id_key'
}

/** input type for incrementing numeric columns in table "report" */
export type Report_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "report" */
export type Report_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  image_url?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['geometry']>;
  message?: InputMaybe<Scalars['String']>;
  t_message_id?: InputMaybe<Scalars['String']>;
  t_update_id?: InputMaybe<Scalars['String']>;
  t_user_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Report_Max_Fields = {
  __typename?: 'report_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  t_message_id?: Maybe<Scalars['String']>;
  t_update_id?: Maybe<Scalars['String']>;
  t_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "report" */
export type Report_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  t_message_id?: InputMaybe<Order_By>;
  t_update_id?: InputMaybe<Order_By>;
  t_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Report_Min_Fields = {
  __typename?: 'report_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  t_message_id?: Maybe<Scalars['String']>;
  t_update_id?: Maybe<Scalars['String']>;
  t_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "report" */
export type Report_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  t_message_id?: InputMaybe<Order_By>;
  t_update_id?: InputMaybe<Order_By>;
  t_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "report" */
export type Report_Mutation_Response = {
  __typename?: 'report_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Report>;
};

/** on_conflict condition type for table "report" */
export type Report_On_Conflict = {
  constraint: Report_Constraint;
  update_columns?: Array<Report_Update_Column>;
  where?: InputMaybe<Report_Bool_Exp>;
};

/** Ordering options when selecting data from "report". */
export type Report_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  t_message_id?: InputMaybe<Order_By>;
  t_update_id?: InputMaybe<Order_By>;
  t_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: report */
export type Report_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "report" */
export enum Report_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Location = 'location',
  /** column name */
  Message = 'message',
  /** column name */
  TMessageId = 't_message_id',
  /** column name */
  TUpdateId = 't_update_id',
  /** column name */
  TUserId = 't_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "report" */
export type Report_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  image_url?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['geometry']>;
  message?: InputMaybe<Scalars['String']>;
  t_message_id?: InputMaybe<Scalars['String']>;
  t_update_id?: InputMaybe<Scalars['String']>;
  t_user_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Report_Stddev_Fields = {
  __typename?: 'report_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "report" */
export type Report_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Report_Stddev_Pop_Fields = {
  __typename?: 'report_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "report" */
export type Report_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Report_Stddev_Samp_Fields = {
  __typename?: 'report_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "report" */
export type Report_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Report_Sum_Fields = {
  __typename?: 'report_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "report" */
export type Report_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "report" */
export enum Report_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Location = 'location',
  /** column name */
  Message = 'message',
  /** column name */
  TMessageId = 't_message_id',
  /** column name */
  TUpdateId = 't_update_id',
  /** column name */
  TUserId = 't_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Report_Var_Pop_Fields = {
  __typename?: 'report_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "report" */
export type Report_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Report_Var_Samp_Fields = {
  __typename?: 'report_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "report" */
export type Report_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Report_Variance_Fields = {
  __typename?: 'report_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "report" */
export type Report_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: InputMaybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "report" */
  report: Array<Report>;
  /** fetch aggregated fields from the table: "report" */
  report_aggregate: Report_Aggregate;
  /** fetch data from the table: "report" using primary key columns */
  report_by_pk?: Maybe<Report>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootReportArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


export type Subscription_RootReport_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


export type Subscription_RootReport_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  reports: Array<Report>;
  /** An aggregate relationship */
  reports_aggregate: Report_Aggregate;
  t_id: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "user" */
export type UserReportsArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Report_Order_By>>;
  where?: InputMaybe<Report_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  reports?: InputMaybe<Report_Bool_Exp>;
  t_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'User_pkey',
  /** unique or primary key constraint on columns "t_id" */
  UserTIdKey = 'User_t_id_key'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<Report_Arr_Rel_Insert_Input>;
  t_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  t_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  t_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  reports_aggregate?: InputMaybe<Report_Aggregate_Order_By>;
  t_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TId = 't_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  t_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TId = 't_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type AskForLocationQueryVariables = Exact<{
  chat_id: Scalars['String'];
}>;


export type AskForLocationQuery = { __typename?: 'query_root', t_askForLocation?: { __typename?: 'T_AskForLocation', ok?: boolean | null } | null };

export type CreateReportMutationVariables = Exact<{
  t_message_id?: InputMaybe<Scalars['String']>;
  t_user_id?: InputMaybe<Scalars['String']>;
  t_update_id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}>;


export type CreateReportMutation = { __typename?: 'mutation_root', insert_report_one?: { __typename?: 'report', id: number } | null };

export type GetCurrentReportQueryVariables = Exact<{
  t_user_id?: InputMaybe<Scalars['String']>;
}>;


export type GetCurrentReportQuery = { __typename?: 'query_root', report: Array<{ __typename?: 'report', t_message_id: string }> };

export type GetPhotoQueryVariables = Exact<{
  photo_id: Scalars['String'];
}>;


export type GetPhotoQuery = { __typename?: 'query_root', t_getPhoto?: { __typename?: 'PhotoResponse', result?: { __typename?: 'PhotoResult', file_path?: string | null } | null } | null };

export type SendMessageAndCloseKeyboardQueryVariables = Exact<{
  chat_id: Scalars['String'];
  message: Scalars['String'];
}>;


export type SendMessageAndCloseKeyboardQuery = { __typename?: 'query_root', t_closeKeyboard?: { __typename?: 'T_AskForLocation', ok?: boolean | null } | null };

export type UpdateImageMutationVariables = Exact<{
  t_message_id?: InputMaybe<Scalars['String']>;
  t_user_id?: InputMaybe<Scalars['String']>;
  t_update_id?: InputMaybe<Scalars['String']>;
  image_url?: InputMaybe<Scalars['String']>;
}>;


export type UpdateImageMutation = { __typename?: 'mutation_root', insert_report_one?: { __typename?: 'report', id: number } | null };

export type UpdateLocationMutationVariables = Exact<{
  t_message_id?: InputMaybe<Scalars['String']>;
  t_user_id?: InputMaybe<Scalars['String']>;
  t_update_id?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['geometry']>;
}>;


export type UpdateLocationMutation = { __typename?: 'mutation_root', insert_report_one?: { __typename?: 'report', id: number } | null };


export const AskForLocation = gql`
    query AskForLocation($chat_id: String!) {
  t_askForLocation(chat_id: $chat_id) {
    ok
  }
}
    `;
export const CreateReport = gql`
    mutation CreateReport($t_message_id: String, $t_user_id: String, $t_update_id: String, $message: String, $name: String) {
  insert_report_one(
    object: {t_message_id: $t_message_id, t_update_id: $t_update_id, message: $message, user: {data: {t_id: $t_user_id, name: $name}, on_conflict: {constraint: User_t_id_key, update_columns: name}}}
    on_conflict: {constraint: report_t_message_id_key, update_columns: [message, t_update_id]}
  ) {
    id
  }
}
    `;
export const GetCurrentReport = gql`
    query GetCurrentReport($t_user_id: String) {
  report(
    where: {t_user_id: {_eq: $t_user_id}}
    limit: 1
    order_by: {created_at: desc}
  ) {
    t_message_id
  }
}
    `;
export const GetPhoto = gql`
    query GetPhoto($photo_id: String!) {
  t_getPhoto(photo_id: $photo_id) {
    result {
      file_path
    }
  }
}
    `;
export const SendMessageAndCloseKeyboard = gql`
    query SendMessageAndCloseKeyboard($chat_id: String!, $message: String!) {
  t_closeKeyboard(chat_id: $chat_id, message: $message) {
    ok
  }
}
    `;
export const UpdateImage = gql`
    mutation UpdateImage($t_message_id: String, $t_user_id: String, $t_update_id: String, $image_url: String) {
  insert_report_one(
    object: {t_message_id: $t_message_id, t_user_id: $t_user_id, t_update_id: $t_update_id, image_url: $image_url}
    on_conflict: {constraint: report_t_message_id_key, update_columns: [image_url, t_update_id]}
  ) {
    id
  }
}
    `;
export const UpdateLocation = gql`
    mutation UpdateLocation($t_message_id: String, $t_user_id: String, $t_update_id: String, $location: geometry) {
  insert_report_one(
    object: {t_message_id: $t_message_id, t_user_id: $t_user_id, t_update_id: $t_update_id, location: $location}
    on_conflict: {constraint: report_t_message_id_key, update_columns: [location, t_update_id]}
  ) {
    id
  }
}
    `;
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "query_root"
    },
    "mutationType": {
      "name": "mutation_root"
    },
    "subscriptionType": {
      "name": "subscription_root"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "Chat",
        "fields": [
          {
            "name": "first_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "last_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "From",
        "fields": [
          {
            "name": "first_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "is_bot",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PhotoResponse",
        "fields": [
          {
            "name": "ok",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "result",
            "type": {
              "kind": "OBJECT",
              "name": "PhotoResult",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PhotoResult",
        "fields": [
          {
            "name": "file_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "file_path",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "file_size",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "file_unique_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Result",
        "fields": [
          {
            "name": "chat",
            "type": {
              "kind": "OBJECT",
              "name": "Chat",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "date",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "from",
            "type": {
              "kind": "OBJECT",
              "name": "From",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "message_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "T_AskForLocation",
        "fields": [
          {
            "name": "ok",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "result",
            "type": {
              "kind": "OBJECT",
              "name": "Result",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "mutation_root",
        "fields": [
          {
            "name": "delete_report",
            "type": {
              "kind": "OBJECT",
              "name": "report_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_report_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "report",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_user",
            "type": {
              "kind": "OBJECT",
              "name": "user_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insert_report",
            "type": {
              "kind": "OBJECT",
              "name": "report_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_report_one",
            "type": {
              "kind": "OBJECT",
              "name": "report",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_user",
            "type": {
              "kind": "OBJECT",
              "name": "user_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_user_one",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "update_report",
            "type": {
              "kind": "OBJECT",
              "name": "report_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_report_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "report",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_user",
            "type": {
              "kind": "OBJECT",
              "name": "user_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "query_root",
        "fields": [
          {
            "name": "report",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "report",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "report_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "report_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "report_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "report",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "t_askForLocation",
            "type": {
              "kind": "OBJECT",
              "name": "T_AskForLocation",
              "ofType": null
            },
            "args": [
              {
                "name": "chat_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "t_closeKeyboard",
            "type": {
              "kind": "OBJECT",
              "name": "T_AskForLocation",
              "ofType": null
            },
            "args": [
              {
                "name": "chat_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "message",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "t_getPhoto",
            "type": {
              "kind": "OBJECT",
              "name": "PhotoResponse",
              "ofType": null
            },
            "args": [
              {
                "name": "photo_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "image_url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "t_message_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "t_update_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "t_user_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "report_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "report",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "report_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "report_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "report_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "report_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "report_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "report_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "report_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "report_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "report_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "report_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image_url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "t_message_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "t_update_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "t_user_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image_url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "t_message_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "t_update_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "t_user_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "report",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "report_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "subscription_root",
        "fields": [
          {
            "name": "report",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "report",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "report_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "report_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "report_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "report",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "user_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "user",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "reports",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "report",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "reports_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "report_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "t_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "user_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "user_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "user_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "user_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "user_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "user_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "user_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "user_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "user_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "user_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "user_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_avg_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "t_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "t_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "user",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_stddev_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_stddev_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_stddev_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_sum_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_var_pop_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_var_samp_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "user_variance_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;

export const AskForLocationDocument = gql`
    query AskForLocation($chat_id: String!) {
  t_askForLocation(chat_id: $chat_id) {
    ok
  }
}
    `;

export function useAskForLocationQuery(options: Omit<Urql.UseQueryArgs<AskForLocationQueryVariables>, 'query'>) {
  return Urql.useQuery<AskForLocationQuery, AskForLocationQueryVariables>({ query: AskForLocationDocument, ...options });
};
export const CreateReportDocument = gql`
    mutation CreateReport($t_message_id: String, $t_user_id: String, $t_update_id: String, $message: String, $name: String) {
  insert_report_one(
    object: {t_message_id: $t_message_id, t_update_id: $t_update_id, message: $message, user: {data: {t_id: $t_user_id, name: $name}, on_conflict: {constraint: User_t_id_key, update_columns: name}}}
    on_conflict: {constraint: report_t_message_id_key, update_columns: [message, t_update_id]}
  ) {
    id
  }
}
    `;

export function useCreateReportMutation() {
  return Urql.useMutation<CreateReportMutation, CreateReportMutationVariables>(CreateReportDocument);
};
export const GetCurrentReportDocument = gql`
    query GetCurrentReport($t_user_id: String) {
  report(
    where: {t_user_id: {_eq: $t_user_id}}
    limit: 1
    order_by: {created_at: desc}
  ) {
    t_message_id
  }
}
    `;

export function useGetCurrentReportQuery(options?: Omit<Urql.UseQueryArgs<GetCurrentReportQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCurrentReportQuery, GetCurrentReportQueryVariables>({ query: GetCurrentReportDocument, ...options });
};
export const GetPhotoDocument = gql`
    query GetPhoto($photo_id: String!) {
  t_getPhoto(photo_id: $photo_id) {
    result {
      file_path
    }
  }
}
    `;

export function useGetPhotoQuery(options: Omit<Urql.UseQueryArgs<GetPhotoQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPhotoQuery, GetPhotoQueryVariables>({ query: GetPhotoDocument, ...options });
};
export const SendMessageAndCloseKeyboardDocument = gql`
    query SendMessageAndCloseKeyboard($chat_id: String!, $message: String!) {
  t_closeKeyboard(chat_id: $chat_id, message: $message) {
    ok
  }
}
    `;

export function useSendMessageAndCloseKeyboardQuery(options: Omit<Urql.UseQueryArgs<SendMessageAndCloseKeyboardQueryVariables>, 'query'>) {
  return Urql.useQuery<SendMessageAndCloseKeyboardQuery, SendMessageAndCloseKeyboardQueryVariables>({ query: SendMessageAndCloseKeyboardDocument, ...options });
};
export const UpdateImageDocument = gql`
    mutation UpdateImage($t_message_id: String, $t_user_id: String, $t_update_id: String, $image_url: String) {
  insert_report_one(
    object: {t_message_id: $t_message_id, t_user_id: $t_user_id, t_update_id: $t_update_id, image_url: $image_url}
    on_conflict: {constraint: report_t_message_id_key, update_columns: [image_url, t_update_id]}
  ) {
    id
  }
}
    `;

export function useUpdateImageMutation() {
  return Urql.useMutation<UpdateImageMutation, UpdateImageMutationVariables>(UpdateImageDocument);
};
export const UpdateLocationDocument = gql`
    mutation UpdateLocation($t_message_id: String, $t_user_id: String, $t_update_id: String, $location: geometry) {
  insert_report_one(
    object: {t_message_id: $t_message_id, t_user_id: $t_user_id, t_update_id: $t_update_id, location: $location}
    on_conflict: {constraint: report_t_message_id_key, update_columns: [location, t_update_id]}
  ) {
    id
  }
}
    `;

export function useUpdateLocationMutation() {
  return Urql.useMutation<UpdateLocationMutation, UpdateLocationMutationVariables>(UpdateLocationDocument);
};