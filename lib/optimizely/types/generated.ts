import { DocumentNode, ExecutionResult } from 'graphql';
import gql from 'graphql-tag';
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
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AvailabilityBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'AvailabilityBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  availability: Maybe<Scalars['String']['output']>;
  projectTypes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AvailabilityBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AvailabilityBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AvailabilityBlockAutocomplete = {
  __typename?: 'AvailabilityBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type AvailabilityBlockFacet = {
  __typename?: 'AvailabilityBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type AvailabilityBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type AvailabilityBlockOutput = {
  __typename?: 'AvailabilityBlockOutput';
  autocomplete: Maybe<AvailabilityBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AvailabilityBlockFacet>;
  item: Maybe<AvailabilityBlock>;
  items: Maybe<Array<Maybe<AvailabilityBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AvailabilityBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AvailabilityBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'BlankExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete: Maybe<BlankExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankExperienceFacet>;
  item: Maybe<BlankExperience>;
  items: Maybe<Array<Maybe<BlankExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete: Maybe<BlankSectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankSectionFacet>;
  item: Maybe<BlankSection>;
  items: Maybe<Array<Maybe<BlankSection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlogPost = IData & _IContent & _IItem & _IPage & {
  __typename?: 'BlogPost';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  author: Maybe<Scalars['String']['output']>;
  body: Maybe<RichText>;
  publishedDate: Maybe<Scalars['String']['output']>;
  subheading: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type BlogPost_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPost_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlogPostAutocomplete = {
  __typename?: 'BlogPostAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  body: Maybe<RichTextAutocomplete>;
};

export type BlogPostFacet = {
  __typename?: 'BlogPostFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  body: Maybe<RichTextFacet>;
};

export type BlogPostOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  body: InputMaybe<RichTextOrderByInput>;
};

export type BlogPostOutput = {
  __typename?: 'BlogPostOutput';
  autocomplete: Maybe<BlogPostAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlogPostFacet>;
  item: Maybe<BlogPost>;
  items: Maybe<Array<Maybe<BlogPost>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlogPostOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlogPostWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlogPostWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlogPostWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  body: InputMaybe<RichTextWhereInput>;
};

export type CmsPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'CMSPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type CmsPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CmsPageAutocomplete = {
  __typename?: 'CMSPageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type CmsPageFacet = {
  __typename?: 'CMSPageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type CmsPageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type CmsPageOutput = {
  __typename?: 'CMSPageOutput';
  autocomplete: Maybe<CmsPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CmsPageFacet>;
  item: Maybe<CmsPage>;
  items: Maybe<Array<Maybe<CmsPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CmsPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CmsPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  value: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key: InputMaybe<OrderBy>;
  value: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key: InputMaybe<StringFilterInput>;
  value: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes: Maybe<ICompositionNodeAutocomplete>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  component: Maybe<_IComponentFacet>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  layoutType: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  nodes: Maybe<ICompositionNodeFacet>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetLayoutTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  component: InputMaybe<_IComponentOrderByInput>;
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  layoutType: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  nodes: InputMaybe<ICompositionNodeOrderByInput>;
  type: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  component: InputMaybe<_IComponentWhereInput>;
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  layoutType: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  nodes: InputMaybe<ICompositionNodeWhereInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ContactBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ContactBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ContactBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactBlockAutocomplete = {
  __typename?: 'ContactBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContactBlockFacet = {
  __typename?: 'ContactBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContactBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContactBlockOutput = {
  __typename?: 'ContactBlockOutput';
  autocomplete: Maybe<ContactBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactBlockFacet>;
  item: Maybe<ContactBlock>;
  items: Maybe<Array<Maybe<ContactBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['String']['output']>;
  graph: Maybe<Scalars['String']['output']>;
  hierarchical: Maybe<Scalars['String']['output']>;
  internal: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base: Maybe<Array<Maybe<StringFacet>>>;
  default: Maybe<Array<Maybe<StringFacet>>>;
  graph: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical: Maybe<Array<Maybe<StringFacet>>>;
  internal: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base: InputMaybe<OrderBy>;
  default: InputMaybe<OrderBy>;
  graph: InputMaybe<OrderBy>;
  hierarchical: InputMaybe<OrderBy>;
  internal: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base: InputMaybe<StringFilterInput>;
  default: InputMaybe<StringFilterInput>;
  graph: InputMaybe<StringFilterInput>;
  hierarchical: InputMaybe<StringFilterInput>;
  internal: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type Data_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor: Maybe<Scalars['String']['output']>;
  item: Maybe<IData>;
  items: Maybe<Array<Maybe<IData>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. */
  decay: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  /** Reference point the decay is measured from. Defaults to `now()`. */
  origin: InputMaybe<Scalars['Date']['input']>;
  /** Score at `scale` distance from `origin`. Defaults to 0.5; must be in the range (0..1). */
  rate: InputMaybe<Scalars['Float']['input']>;
  /** Decay distance in days. Defaults to 10. */
  scale: InputMaybe<Scalars['Int']['input']>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  Log = 'LOG',
  /** Do not apply any multiplier to the field value */
  None = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  Reciprocal = 'RECIPROCAL',
  /** Take the square root of the field value */
  Sqrt = 'SQRT',
  /** Square the field value (multiply it by itself) */
  Square = 'SQUARE'
}

export type FloatFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Float']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Float']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Float']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Float']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Float']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Float']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Float']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type Footer = IData & _IContent & _IItem & _IPage & {
  __typename?: 'Footer';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  columns: Maybe<Array<Maybe<_IContent>>>;
  copyrightText: Maybe<Scalars['String']['output']>;
  socialLinks: Maybe<Array<Maybe<_IContent>>>;
};


export type Footer_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Footer_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterAutocomplete = {
  __typename?: 'FooterAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  columns: Maybe<_IContentAutocomplete>;
  socialLinks: Maybe<_IContentAutocomplete>;
};

export type FooterColumn = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'FooterColumn';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  links: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type FooterColumn_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterColumn_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterColumnAutocomplete = {
  __typename?: 'FooterColumnAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  links: Maybe<_IContentAutocomplete>;
};

export type FooterColumnFacet = {
  __typename?: 'FooterColumnFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  links: Maybe<_IContentFacet>;
};

export type FooterColumnOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  links: InputMaybe<_IContentOrderByInput>;
};

export type FooterColumnOutput = {
  __typename?: 'FooterColumnOutput';
  autocomplete: Maybe<FooterColumnAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterColumnFacet>;
  item: Maybe<FooterColumn>;
  items: Maybe<Array<Maybe<FooterColumn>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterColumnOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterColumnWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  links: InputMaybe<_IContentWhereInput>;
};

export type FooterFacet = {
  __typename?: 'FooterFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  columns: Maybe<_IContentFacet>;
  socialLinks: Maybe<_IContentFacet>;
};

export type FooterOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  columns: InputMaybe<_IContentOrderByInput>;
  socialLinks: InputMaybe<_IContentOrderByInput>;
};

export type FooterOutput = {
  __typename?: 'FooterOutput';
  autocomplete: Maybe<FooterAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterFacet>;
  item: Maybe<Footer>;
  items: Maybe<Array<Maybe<Footer>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  columns: InputMaybe<_IContentWhereInput>;
  socialLinks: InputMaybe<_IContentWhereInput>;
};

export type GenericMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'GenericMedia';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMedia123 = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'GenericMedia123';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type GenericMedia123_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia123_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMedia123Autocomplete = {
  __typename?: 'GenericMedia123Autocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMedia123Facet = {
  __typename?: 'GenericMedia123Facet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMedia123OrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMedia123Output = {
  __typename?: 'GenericMedia123Output';
  autocomplete: Maybe<GenericMedia123Autocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMedia123Facet>;
  item: Maybe<GenericMedia123>;
  items: Maybe<Array<Maybe<GenericMedia123>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMedia123OutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMedia123WhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete: Maybe<GenericMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMediaFacet>;
  item: Maybe<GenericMedia>;
  items: Maybe<Array<Maybe<GenericMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type Header = IData & _IContent & _IItem & _IPage & {
  __typename?: 'Header';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  ctaHref: Maybe<Scalars['String']['output']>;
  ctaText: Maybe<Scalars['String']['output']>;
  logo: Maybe<Scalars['String']['output']>;
  navItems: Maybe<Array<Maybe<_IContent>>>;
};


export type Header_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Header_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeaderAutocomplete = {
  __typename?: 'HeaderAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  navItems: Maybe<_IContentAutocomplete>;
};

export type HeaderFacet = {
  __typename?: 'HeaderFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  navItems: Maybe<_IContentFacet>;
};

export type HeaderOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  navItems: InputMaybe<_IContentOrderByInput>;
};

export type HeaderOutput = {
  __typename?: 'HeaderOutput';
  autocomplete: Maybe<HeaderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeaderFacet>;
  item: Maybe<Header>;
  items: Maybe<Array<Maybe<Header>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeaderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  navItems: InputMaybe<_IContentWhereInput>;
};

export type HeroBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'HeroBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  decorationColorsPrimary: Maybe<Scalars['String']['output']>;
  decorationColorsSecondary: Maybe<Scalars['String']['output']>;
  showDecoration: Maybe<Scalars['Boolean']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete: Maybe<HeroBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeroBlockFacet>;
  item: Maybe<HeroBlock>;
  items: Maybe<Array<Maybe<HeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  endToken: InputMaybe<Scalars['String']['input']>;
  startToken: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  layoutType: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetLayoutTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  layoutType: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  layoutType: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  layoutType: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
  variation: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVariationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset: Maybe<Array<Maybe<StringFacet>>>;
  created: Maybe<Array<Maybe<DateFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  locale: Maybe<Array<Maybe<StringFacet>>>;
  published: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
  status: Maybe<Array<Maybe<StringFacet>>>;
  types: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
  variation: Maybe<Array<Maybe<StringFacet>>>;
  version: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetSortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVariationArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset: InputMaybe<OrderBy>;
  created: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  fallbackForLocale: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  locale: InputMaybe<OrderBy>;
  published: InputMaybe<OrderBy>;
  sortOrder: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  types: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
  variation: InputMaybe<OrderBy>;
  version: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset: InputMaybe<StringFilterInput>;
  created: InputMaybe<DateFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  published: InputMaybe<DateFilterInput>;
  sortOrder: InputMaybe<IntFilterInput>;
  status: InputMaybe<StringFilterInput>;
  types: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
  variation: InputMaybe<StringFilterInput>;
  version: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type IData_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ImageMedia = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: 'ImageMedia';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _imageMetadata: Maybe<_ImageMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete: Maybe<ImageMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageMediaFacet>;
  item: Maybe<ImageMedia>;
  items: Maybe<Array<Maybe<ImageMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type LinkConfig = {
  from: InputMaybe<Scalars['String']['input']>;
  to: InputMaybe<Scalars['String']['input']>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  Assets = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Default = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Items = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  Path = 'PATH'
}

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export type LogoItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'LogoItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  alt: Maybe<Scalars['String']['output']>;
  src: Maybe<Scalars['String']['output']>;
};


export type LogoItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogoItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogoItemBlockAutocomplete = {
  __typename?: 'LogoItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LogoItemBlockFacet = {
  __typename?: 'LogoItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LogoItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LogoItemBlockOutput = {
  __typename?: 'LogoItemBlockOutput';
  autocomplete: Maybe<LogoItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogoItemBlockFacet>;
  item: Maybe<LogoItemBlock>;
  items: Maybe<Array<Maybe<LogoItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogoItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogoItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type LogosBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'LogosBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  logos: Maybe<Array<Maybe<_IContent>>>;
};


export type LogosBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogosBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogosBlockAutocomplete = {
  __typename?: 'LogosBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  logos: Maybe<_IContentAutocomplete>;
};

export type LogosBlockFacet = {
  __typename?: 'LogosBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  logos: Maybe<_IContentFacet>;
};

export type LogosBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  logos: InputMaybe<_IContentOrderByInput>;
};

export type LogosBlockOutput = {
  __typename?: 'LogosBlockOutput';
  autocomplete: Maybe<LogosBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogosBlockFacet>;
  item: Maybe<LogosBlock>;
  items: Maybe<Array<Maybe<LogosBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogosBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogosBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  logos: InputMaybe<_IContentWhereInput>;
};

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  variation: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type NavItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'NavItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  href: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
};


export type NavItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type NavItemAutocomplete = {
  __typename?: 'NavItemAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type NavItemFacet = {
  __typename?: 'NavItemFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type NavItemOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type NavItemOutput = {
  __typename?: 'NavItemOutput';
  autocomplete: Maybe<NavItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<NavItemFacet>;
  item: Maybe<NavItem>;
  items: Maybe<Array<Maybe<NavItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type NavItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier: InputMaybe<FactorModifier>;
  value: InputMaybe<Scalars['Float']['input']>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type PinnedInput = {
  /** Pinned collection keys */
  collections: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase: InputMaybe<Scalars['String']['input']>;
};

export type PortfolioGridBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PortfolioGridBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  items: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioGridBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioGridBlockAutocomplete = {
  __typename?: 'PortfolioGridBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  items: Maybe<_IContentAutocomplete>;
};

export type PortfolioGridBlockFacet = {
  __typename?: 'PortfolioGridBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  items: Maybe<_IContentFacet>;
};

export type PortfolioGridBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  items: InputMaybe<_IContentOrderByInput>;
};

export type PortfolioGridBlockOutput = {
  __typename?: 'PortfolioGridBlockOutput';
  autocomplete: Maybe<PortfolioGridBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioGridBlockFacet>;
  item: Maybe<PortfolioGridBlock>;
  items: Maybe<Array<Maybe<PortfolioGridBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioGridBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioGridBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  items: InputMaybe<_IContentWhereInput>;
};

export type PortfolioItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PortfolioItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  imageUrl: Maybe<Scalars['String']['output']>;
  link: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioItemBlockAutocomplete = {
  __typename?: 'PortfolioItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PortfolioItemBlockFacet = {
  __typename?: 'PortfolioItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type PortfolioItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PortfolioItemBlockOutput = {
  __typename?: 'PortfolioItemBlockOutput';
  autocomplete: Maybe<PortfolioItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioItemBlockFacet>;
  item: Maybe<PortfolioItemBlock>;
  items: Maybe<Array<Maybe<PortfolioItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type ProfileBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ProfileBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  bio: Maybe<Scalars['String']['output']>;
  imageSrc: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ProfileBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ProfileBlockAutocomplete = {
  __typename?: 'ProfileBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ProfileBlockFacet = {
  __typename?: 'ProfileBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ProfileBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ProfileBlockOutput = {
  __typename?: 'ProfileBlockOutput';
  autocomplete: Maybe<ProfileBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ProfileBlockFacet>;
  item: Maybe<ProfileBlock>;
  items: Maybe<Array<Maybe<ProfileBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ProfileBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProfileBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlogPost: Maybe<BlogPostOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Data: Maybe<DataOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _AssetItem: Maybe<_AssetItemOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _ImageItem: Maybe<_ImageItemOutput>;
  _Item: Maybe<_ItemOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBlogPostArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogPostOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogPostWhereInput>;
};


export type QueryCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterWhereInput>;
};


export type QueryFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeaderWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QuerySeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SeoExperienceWhereInput>;
};


export type QueryServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QuerySocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type Query_AssetItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_AssetItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_AssetItemWhereInput>;
};


export type Query_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type Query_ImageItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageItemWhereInput>;
};


export type Query_ItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ItemWhereInput>;
};


export type Query_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlogPost: Maybe<BlogPostOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Data: Maybe<DataOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _AssetItem: Maybe<_AssetItemOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _ImageItem: Maybe<_ImageItemOutput>;
  _Item: Maybe<_ItemOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryRefAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBlogPostArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogPostOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogPostWhereInput>;
};


export type QueryRefCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryRefContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryRefDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryRefFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterWhereInput>;
};


export type QueryRefFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryRefHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeaderWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryRefLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryRefNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryRefPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryRefPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryRefProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QueryRefSeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SeoExperienceWhereInput>;
};


export type QueryRefServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryRefServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QueryRefSocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryRefStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryRefTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryRefTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_AssetItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_AssetItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_AssetItemWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_ImageItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageItemWhereInput>;
};


export type QueryRef_ItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ItemWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking: InputMaybe<TrackingInput>;
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};

export type RangeFacetsInput = {
  from: InputMaybe<Scalars['Int']['input']>;
  to: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Id = 'ID',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html: InputMaybe<StringFilterInput>;
};

export type SeoExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'SEOExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type SeoExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SeoExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SeoExperienceAutocomplete = {
  __typename?: 'SEOExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type SeoExperienceFacet = {
  __typename?: 'SEOExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type SeoExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type SeoExperienceOutput = {
  __typename?: 'SEOExperienceOutput';
  autocomplete: Maybe<SeoExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SeoExperienceFacet>;
  item: Maybe<SeoExperience>;
  items: Maybe<Array<Maybe<SeoExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SeoExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type ServiceItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ServiceItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ServiceItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServiceItemAutocomplete = {
  __typename?: 'ServiceItemAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ServiceItemFacet = {
  __typename?: 'ServiceItemFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ServiceItemOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ServiceItemOutput = {
  __typename?: 'ServiceItemOutput';
  autocomplete: Maybe<ServiceItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServiceItemFacet>;
  item: Maybe<ServiceItem>;
  items: Maybe<Array<Maybe<ServiceItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServiceItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type ServicesBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ServicesBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  services: Maybe<Array<Maybe<_IContent>>>;
};


export type ServicesBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServicesBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServicesBlockAutocomplete = {
  __typename?: 'ServicesBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  services: Maybe<_IContentAutocomplete>;
};

export type ServicesBlockFacet = {
  __typename?: 'ServicesBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  services: Maybe<_IContentFacet>;
};

export type ServicesBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  services: InputMaybe<_IContentOrderByInput>;
};

export type ServicesBlockOutput = {
  __typename?: 'ServicesBlockOutput';
  autocomplete: Maybe<ServicesBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServicesBlockFacet>;
  item: Maybe<ServicesBlock>;
  items: Maybe<Array<Maybe<ServicesBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServicesBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServicesBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  services: InputMaybe<_IContentWhereInput>;
};

export type SocialLink = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'SocialLink';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  href: Maybe<Scalars['String']['output']>;
  platform: Maybe<Scalars['String']['output']>;
};


export type SocialLink_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialLink_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SocialLinkAutocomplete = {
  __typename?: 'SocialLinkAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SocialLinkFacet = {
  __typename?: 'SocialLinkFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SocialLinkOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SocialLinkOutput = {
  __typename?: 'SocialLinkOutput';
  autocomplete: Maybe<SocialLinkAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SocialLinkFacet>;
  item: Maybe<SocialLink>;
  items: Maybe<Array<Maybe<SocialLink>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SocialLinkOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialLinkWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type SourceFilterInput = {
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Sources {
  Default = 'DEFAULT'
}

export type StartPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'StartPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type StartPageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete: Maybe<StartPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StartPageFacet>;
  item: Maybe<StartPage>;
  items: Maybe<Array<Maybe<StartPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type StoryBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'StoryBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  highlights: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story: Maybe<Scalars['String']['output']>;
};


export type StoryBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StoryBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StoryBlockAutocomplete = {
  __typename?: 'StoryBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type StoryBlockFacet = {
  __typename?: 'StoryBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type StoryBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type StoryBlockOutput = {
  __typename?: 'StoryBlockOutput';
  autocomplete: Maybe<StoryBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StoryBlockFacet>;
  item: Maybe<StoryBlock>;
  items: Maybe<Array<Maybe<StoryBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StoryBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoryBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & _IItem & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete: Maybe<SysContentFolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SysContentFolderFacet>;
  item: Maybe<SysContentFolder>;
  items: Maybe<Array<Maybe<SysContentFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type TestimonialItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemAutocomplete = {
  __typename?: 'TestimonialItemAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemBlockAutocomplete = {
  __typename?: 'TestimonialItemBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlockFacet = {
  __typename?: 'TestimonialItemBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemBlockOutput = {
  __typename?: 'TestimonialItemBlockOutput';
  autocomplete: Maybe<TestimonialItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemBlockFacet>;
  item: Maybe<TestimonialItemBlock>;
  items: Maybe<Array<Maybe<TestimonialItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type TestimonialItemFacet = {
  __typename?: 'TestimonialItemFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemOutput = {
  __typename?: 'TestimonialItemOutput';
  autocomplete: Maybe<TestimonialItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemFacet>;
  item: Maybe<TestimonialItem>;
  items: Maybe<Array<Maybe<TestimonialItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type TestimonialsBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialsBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  testimonials: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type TestimonialsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialsBlockAutocomplete = {
  __typename?: 'TestimonialsBlockAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  testimonials: Maybe<_IContentAutocomplete>;
};

export type TestimonialsBlockFacet = {
  __typename?: 'TestimonialsBlockFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  testimonials: Maybe<_IContentFacet>;
};

export type TestimonialsBlockOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  testimonials: InputMaybe<_IContentOrderByInput>;
};

export type TestimonialsBlockOutput = {
  __typename?: 'TestimonialsBlockOutput';
  autocomplete: Maybe<TestimonialsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialsBlockFacet>;
  item: Maybe<TestimonialsBlock>;
  items: Maybe<Array<Maybe<TestimonialsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialsBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  testimonials: InputMaybe<_IContentWhereInput>;
};

export type TrackingInput = {
  /** Search phrase to track */
  phrase: Scalars['String']['input'];
  /** Source of the search query (optional) */
  source: InputMaybe<Scalars['String']['input']>;
};

export enum VariationIncludeMode {
  All = 'ALL',
  None = 'NONE',
  Some = 'SOME'
}

export type VariationInput = {
  include: InputMaybe<VariationIncludeMode>;
  includeOriginal: InputMaybe<Scalars['Boolean']['input']>;
  value: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete: Maybe<VideoMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoMediaFacet>;
  item: Maybe<VideoMedia>;
  items: Maybe<Array<Maybe<VideoMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _AssetItem = IData & _IAssetItem & _IItem & {
  __typename?: '_AssetItem';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _AssetItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _AssetItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _AssetItemAutocomplete = {
  __typename?: '_AssetItemAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
};

export type _AssetItemFacet = {
  __typename?: '_AssetItemFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
};

export type _AssetItemOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _AssetItemOutput = {
  __typename?: '_AssetItemOutput';
  autocomplete: Maybe<_AssetItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_AssetItemFacet>;
  item: Maybe<_IAssetItem>;
  items: Maybe<Array<Maybe<_IAssetItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _AssetItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _AssetItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _AssetMetadata = {
  __typename?: '_AssetMetadata';
  fileSize: Maybe<Scalars['Float']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type _AssetMetadataAutocomplete = {
  __typename?: '_AssetMetadataAutocomplete';
  mimeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _AssetMetadataAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _AssetMetadataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _AssetMetadataFacet = {
  __typename?: '_AssetMetadataFacet';
  fileSize: Maybe<Array<Maybe<NumberFacet>>>;
  mimeType: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<Array<Maybe<StringFacet>>>;
};


export type _AssetMetadataFacetFileSizeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _AssetMetadataFacetMimeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _AssetMetadataFacetUrlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _AssetMetadataOrderByInput = {
  fileSize: InputMaybe<OrderBy>;
  mimeType: InputMaybe<OrderBy>;
  url: InputMaybe<OrderBy>;
};

export type _AssetMetadataWhereInput = {
  fileSize: InputMaybe<FloatFilterInput>;
  mimeType: InputMaybe<StringFilterInput>;
  url: InputMaybe<StringFilterInput>;
};

export type _Component = IData & _IComponent & _IContent & _IItem & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Component_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete: Maybe<_ComponentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ComponentFacet>;
  item: Maybe<_IComponent>;
  items: Maybe<Array<Maybe<_IComponent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Content = IData & _IContent & _IItem & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Content_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete: Maybe<_ContentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ContentFacet>;
  item: Maybe<_IContent>;
  items: Maybe<Array<Maybe<_IContent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Experience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete: Maybe<_ExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ExperienceFacet>;
  item: Maybe<_IExperience>;
  items: Maybe<Array<Maybe<_IExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & _IItem & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete: Maybe<_FolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_FolderFacet>;
  item: Maybe<_IFolder>;
  items: Maybe<Array<Maybe<_IFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _IAssetItem = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IAssetItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IAssetItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IComponentFacet = {
  __typename?: '_IComponentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IComponentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImage = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImageItem = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IImageItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImageItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IItem = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: '_Image';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Image_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _imageMetadata: Maybe<_ImageMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ImageItem = IData & _IAssetItem & _IImageItem & _IItem & {
  __typename?: '_ImageItem';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _imageMetadata: Maybe<_ImageMetadata>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _ImageItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ImageItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageItemAutocomplete = {
  __typename?: '_ImageItemAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
};

export type _ImageItemFacet = {
  __typename?: '_ImageItemFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _imageMetadata: Maybe<_ImageMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
};

export type _ImageItemOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageItemOutput = {
  __typename?: '_ImageItemOutput';
  autocomplete: Maybe<_ImageItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageItemFacet>;
  item: Maybe<_IImageItem>;
  items: Maybe<Array<Maybe<_IImageItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _ImageMetadata = {
  __typename?: '_ImageMetadata';
  height: Maybe<Scalars['Int']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type _ImageMetadataFacet = {
  __typename?: '_ImageMetadataFacet';
  height: Maybe<Array<Maybe<NumberFacet>>>;
  width: Maybe<Array<Maybe<NumberFacet>>>;
};


export type _ImageMetadataFacetHeightArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _ImageMetadataFacetWidthArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type _ImageMetadataOrderByInput = {
  height: InputMaybe<OrderBy>;
  width: InputMaybe<OrderBy>;
};

export type _ImageMetadataWhereInput = {
  height: InputMaybe<IntFilterInput>;
  width: InputMaybe<IntFilterInput>;
};

export type _ImageOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete: Maybe<_ImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageFacet>;
  item: Maybe<_IImage>;
  items: Maybe<Array<Maybe<_IImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Item = IData & _IItem & {
  __typename?: '_Item';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Item_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Item_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ItemAutocomplete = {
  __typename?: '_ItemAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
};

export type _ItemFacet = {
  __typename?: '_ItemFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
};

export type _ItemOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ItemOutput = {
  __typename?: '_ItemOutput';
  autocomplete: Maybe<_ItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ItemFacet>;
  item: Maybe<_IItem>;
  items: Maybe<Array<Maybe<_IItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Media = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: '_Media';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Media_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete: Maybe<_MediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_MediaFacet>;
  item: Maybe<_IMedia>;
  items: Maybe<Array<Maybe<_IMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Metadata = {
  __typename?: '_Metadata';
  displayName: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  type: Maybe<Scalars['String']['output']>;
};


export type _MetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type _MetadataAutocomplete = {
  __typename?: '_MetadataAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _MetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _MetadataAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _MetadataFacet = {
  __typename?: '_MetadataFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type _MetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value: InputMaybe<Scalars['Int']['input']>;
};


export type _MetadataFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _MetadataOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type _MetadataWhereInput = {
  displayName: InputMaybe<SearchableStringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type _Page = IData & _IContent & _IItem & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Page_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete: Maybe<_PageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_PageFacet>;
  item: Maybe<_IPage>;
  items: Maybe<Array<Maybe<_IPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export type _Section = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete: Maybe<_SectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_SectionFacet>;
  item: Maybe<_ISection>;
  items: Maybe<Array<Maybe<_ISection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: '_Video';
  _assetMetadata: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _itemMetadata: Maybe<_Metadata>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  _source: Maybe<Scalars['String']['output']>;
  _track: Maybe<Scalars['String']['output']>;
};


export type _Video_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _assetMetadata: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata: Maybe<_MetadataAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _assetMetadata: Maybe<_AssetMetadataFacet>;
  _itemMetadata: Maybe<_MetadataFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _assetMetadata: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata: InputMaybe<_MetadataOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete: Maybe<_VideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_VideoFacet>;
  item: Maybe<_IVideo>;
  items: Maybe<Array<Maybe<_IVideo>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _assetMetadata: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata: InputMaybe<_MetadataWhereInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _source: InputMaybe<SourceFilterInput>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type UsePinnedInput = {
  collectionId: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase: InputMaybe<Scalars['String']['input']>;
};

export type AllPagesQueryVariables = Exact<{
  pageType: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type AllPagesQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', items: Array<{ __typename?: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlogPost', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null> | null } | null };

export type GetAllBlogPostsQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  limit: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllBlogPostsQuery = { __typename?: 'Query', BlogPost: { __typename?: 'BlogPostOutput', total: number | null, items: Array<{ __typename?: 'BlogPost', title: string | null, subheading: string | null, author: string | null, publishedDate: string | null, _metadata: { __typename?: 'ContentMetadata', url: { __typename?: 'ContentUrl', default: string | null, hierarchical: string | null } | null } | { __typename?: 'InstanceMetadata', url: { __typename?: 'ContentUrl', default: string | null, hierarchical: string | null } | null } | { __typename?: 'ItemMetadata', url: { __typename?: 'ContentUrl', default: string | null, hierarchical: string | null } | null } | { __typename?: 'MediaMetadata', url: { __typename?: 'ContentUrl', default: string | null, hierarchical: string | null } | null } | null } | null> | null } | null };

export type GetBlogPostByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  urlSuffix: InputMaybe<Scalars['String']['input']>;
}>;


export type GetBlogPostByUrlQuery = { __typename?: 'Query', BlogPost: { __typename?: 'BlogPostOutput', total: number | null, item: { __typename?: 'BlogPost', title: string | null, subheading: string | null, author: string | null, publishedDate: string | null, _modified: any | null, body: { __typename?: 'RichText', html: string | null, json: any | null } | null, _metadata: { __typename?: 'ContentMetadata', url: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename?: 'InstanceMetadata', url: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename?: 'ItemMetadata', url: { __typename?: 'ContentUrl', default: string | null } | null } | { __typename?: 'MediaMetadata', url: { __typename?: 'ContentUrl', default: string | null } | null } | null } | null } | null };

export type GetContentByGuidQueryVariables = Exact<{
  guid: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByGuidQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', item: { __typename: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlogPost', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null } | null };

export type GetFooterQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetFooterQuery = { __typename?: 'Query', Footer: { __typename?: 'FooterOutput', item: { __typename?: 'Footer', copyrightText: string | null, socialLinks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPost' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink', platform: string | null, href: string | null } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null, columns: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPost' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Footer' } | { __typename: 'FooterColumn', title: string | null, links: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPost' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem', label: string | null, href: string | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type GetPageByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', item: { __typename?: 'CMSPage', title: string | null, shortDescription: string | null, keywords: string | null, _modified: any | null, blocks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPost' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type GetStartPageQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetStartPageQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', item: { __typename?: 'StartPage', title: string | null, shortDescription: string | null, keywords: string | null, blocks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPost' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type GetVisualBuilderBySlugQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetVisualBuilderBySlugQuery = { __typename?: 'Query', SEOExperience: { __typename?: 'SEOExperienceOutput', item: { __typename?: 'SEOExperience', title: string | null, shortDescription: string | null, keywords: string | null, composition: { __typename?: 'CompositionStructureNode', nodes: Array<{ __typename?: 'CompositionComponentNode', nodeType: string | null, key: string | null, component: { __typename: 'AvailabilityBlock' } | { __typename: 'BlankSection' } | { __typename: 'ContactBlock' } | { __typename: 'FooterColumn' } | { __typename: 'HeroBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', nodeType: string | null, key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, nodeType: string | null, rows: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, columns: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, elements: Array<{ __typename?: 'CompositionComponentNode', key: string | null, component: { __typename: 'AvailabilityBlock' } | { __typename: 'BlankSection' } | { __typename: 'ContactBlock' } | { __typename: 'FooterColumn' } | { __typename: 'HeroBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null> | null } | null> | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null } | null } | null };

export type GetAllBlogPostVersionsByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  urlSuffix: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllBlogPostVersionsByUrlQuery = { __typename?: 'Query', BlogPost: { __typename?: 'BlogPostOutput', items: Array<{ __typename?: 'BlogPost', title: string | null, subheading: string | null, author: string | null, publishedDate: string | null, _modified: any | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, body: { __typename?: 'RichText', html: string | null, json: any | null } | null } | null> | null } | null };

export type GetAllPagesVersionByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllPagesVersionByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', items: Array<{ __typename?: 'CMSPage', title: string | null, shortDescription: string | null, keywords: string | null, _modified: any | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, blocks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPost' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetAllStartPageVersionsQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetAllStartPageVersionsQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', items: Array<{ __typename?: 'StartPage', title: string | null, shortDescription: string | null, keywords: string | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, blocks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPost' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetAllVisualBuilderVesrionsBySlugQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllVisualBuilderVesrionsBySlugQuery = { __typename?: 'Query', SEOExperience: { __typename?: 'SEOExperienceOutput', items: Array<{ __typename?: 'SEOExperience', title: string | null, shortDescription: string | null, keywords: string | null, _metadata: { __typename?: 'ContentMetadata', version: string | null } | { __typename?: 'InstanceMetadata', version: string | null } | { __typename?: 'ItemMetadata', version: string | null } | { __typename?: 'MediaMetadata', version: string | null } | null, composition: { __typename?: 'CompositionStructureNode', nodes: Array<{ __typename?: 'CompositionComponentNode', nodeType: string | null, key: string | null, component: { __typename: 'AvailabilityBlock' } | { __typename: 'BlankSection' } | { __typename: 'ContactBlock' } | { __typename: 'FooterColumn' } | { __typename: 'HeroBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', nodeType: string | null, key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, nodeType: string | null, rows: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, columns: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, elements: Array<{ __typename?: 'CompositionComponentNode', key: string | null, component: { __typename: 'AvailabilityBlock' } | { __typename: 'BlankSection' } | { __typename: 'ContactBlock' } | { __typename: 'FooterColumn' } | { __typename: 'HeroBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null> | null } | null> | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null } | null> | null } | null };

export type GetComponentByKeyQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  key: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetComponentByKeyQuery = { __typename?: 'Query', _Component: { __typename?: '_ComponentOutput', item: { __typename: 'AvailabilityBlock' } | { __typename: 'BlankSection' } | { __typename: 'ContactBlock' } | { __typename: 'FooterColumn' } | { __typename: 'HeroBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: '_Component' } | { __typename: '_Section' } | null } | null };

export type GetContentByKeyAndVersionQueryVariables = Exact<{
  key: InputMaybe<Scalars['String']['input']>;
  ver: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByKeyAndVersionQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', item: { __typename: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'BlogPost', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'GenericMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null } | null };

export type GetPreviewBlogPostByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  urlSuffix: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPreviewBlogPostByUrlQuery = { __typename?: 'Query', BlogPost: { __typename?: 'BlogPostOutput', total: number | null, item: { __typename?: 'BlogPost', title: string | null, subheading: string | null, author: string | null, publishedDate: string | null, _modified: any | null, body: { __typename?: 'RichText', html: string | null, json: any | null } | null } | null } | null };

export type GetPreviewPageByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPreviewPageByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', total: number | null, item: { __typename?: 'CMSPage', blocks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPost' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type GetPreviewStartPageQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPreviewStartPageQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', item: { __typename?: 'StartPage', blocks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogPost' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null } | null };

export type VisualBuilderQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  key: InputMaybe<Scalars['String']['input']>;
  version: InputMaybe<Scalars['String']['input']>;
}>;


export type VisualBuilderQuery = { __typename?: 'Query', SEOExperience: { __typename?: 'SEOExperienceOutput', item: { __typename?: 'SEOExperience', composition: { __typename?: 'CompositionStructureNode', nodes: Array<{ __typename?: 'CompositionComponentNode', nodeType: string | null, key: string | null, component: { __typename: 'AvailabilityBlock' } | { __typename: 'BlankSection' } | { __typename: 'ContactBlock' } | { __typename: 'FooterColumn' } | { __typename: 'HeroBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', nodeType: string | null, key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, nodeType: string | null, rows: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, columns: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode', key: string | null, elements: Array<{ __typename?: 'CompositionComponentNode', key: string | null, component: { __typename: 'AvailabilityBlock' } | { __typename: 'BlankSection' } | { __typename: 'ContactBlock' } | { __typename: 'FooterColumn' } | { __typename: 'HeroBlock' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StoryBlock' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: '_Component' } | { __typename: '_Section' } | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | { __typename?: 'CompositionStructureNode', key: string | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null> | null } | null> | null, displaySettings: Array<{ __typename?: 'CompositionDisplaySetting', value: string | null, key: string | null } | null> | null } | null> | null } | null, _metadata: { __typename?: 'ContentMetadata', key: string | null, version: string | null } | { __typename?: 'InstanceMetadata', key: string | null, version: string | null } | { __typename?: 'ItemMetadata', key: string | null, version: string | null } | { __typename?: 'MediaMetadata', key: string | null, version: string | null } | null } | null } | null };

type ItemsInContentArea_AvailabilityBlock_Fragment = { __typename: 'AvailabilityBlock' };

type ItemsInContentArea_BlankExperience_Fragment = { __typename: 'BlankExperience' };

type ItemsInContentArea_BlankSection_Fragment = { __typename: 'BlankSection' };

type ItemsInContentArea_BlogPost_Fragment = { __typename: 'BlogPost' };

type ItemsInContentArea_CmsPage_Fragment = { __typename: 'CMSPage' };

type ItemsInContentArea_ContactBlock_Fragment = { __typename: 'ContactBlock' };

type ItemsInContentArea_Footer_Fragment = { __typename: 'Footer' };

type ItemsInContentArea_FooterColumn_Fragment = { __typename: 'FooterColumn' };

type ItemsInContentArea_GenericMedia_Fragment = { __typename: 'GenericMedia' };

type ItemsInContentArea_GenericMedia123_Fragment = { __typename: 'GenericMedia123' };

type ItemsInContentArea_Header_Fragment = { __typename: 'Header' };

type ItemsInContentArea_HeroBlock_Fragment = { __typename: 'HeroBlock' };

type ItemsInContentArea_ImageMedia_Fragment = { __typename: 'ImageMedia' };

type ItemsInContentArea_LogoItemBlock_Fragment = { __typename: 'LogoItemBlock' };

type ItemsInContentArea_LogosBlock_Fragment = { __typename: 'LogosBlock' };

type ItemsInContentArea_NavItem_Fragment = { __typename: 'NavItem' };

type ItemsInContentArea_PortfolioGridBlock_Fragment = { __typename: 'PortfolioGridBlock' };

type ItemsInContentArea_PortfolioItemBlock_Fragment = { __typename: 'PortfolioItemBlock' };

type ItemsInContentArea_ProfileBlock_Fragment = { __typename: 'ProfileBlock' };

type ItemsInContentArea_SeoExperience_Fragment = { __typename: 'SEOExperience' };

type ItemsInContentArea_ServiceItem_Fragment = { __typename: 'ServiceItem' };

type ItemsInContentArea_ServicesBlock_Fragment = { __typename: 'ServicesBlock' };

type ItemsInContentArea_SocialLink_Fragment = { __typename: 'SocialLink' };

type ItemsInContentArea_StartPage_Fragment = { __typename: 'StartPage' };

type ItemsInContentArea_StoryBlock_Fragment = { __typename: 'StoryBlock' };

type ItemsInContentArea_SysContentFolder_Fragment = { __typename: 'SysContentFolder' };

type ItemsInContentArea_TestimonialItem_Fragment = { __typename: 'TestimonialItem' };

type ItemsInContentArea_TestimonialItemBlock_Fragment = { __typename: 'TestimonialItemBlock' };

type ItemsInContentArea_TestimonialsBlock_Fragment = { __typename: 'TestimonialsBlock' };

type ItemsInContentArea_VideoMedia_Fragment = { __typename: 'VideoMedia' };

type ItemsInContentArea__Component_Fragment = { __typename: '_Component' };

type ItemsInContentArea__Content_Fragment = { __typename: '_Content' };

type ItemsInContentArea__Experience_Fragment = { __typename: '_Experience' };

type ItemsInContentArea__Folder_Fragment = { __typename: '_Folder' };

type ItemsInContentArea__Image_Fragment = { __typename: '_Image' };

type ItemsInContentArea__Media_Fragment = { __typename: '_Media' };

type ItemsInContentArea__Page_Fragment = { __typename: '_Page' };

type ItemsInContentArea__Section_Fragment = { __typename: '_Section' };

type ItemsInContentArea__Video_Fragment = { __typename: '_Video' };

export type ItemsInContentAreaFragment = ItemsInContentArea_AvailabilityBlock_Fragment | ItemsInContentArea_BlankExperience_Fragment | ItemsInContentArea_BlankSection_Fragment | ItemsInContentArea_BlogPost_Fragment | ItemsInContentArea_CmsPage_Fragment | ItemsInContentArea_ContactBlock_Fragment | ItemsInContentArea_Footer_Fragment | ItemsInContentArea_FooterColumn_Fragment | ItemsInContentArea_GenericMedia_Fragment | ItemsInContentArea_GenericMedia123_Fragment | ItemsInContentArea_Header_Fragment | ItemsInContentArea_HeroBlock_Fragment | ItemsInContentArea_ImageMedia_Fragment | ItemsInContentArea_LogoItemBlock_Fragment | ItemsInContentArea_LogosBlock_Fragment | ItemsInContentArea_NavItem_Fragment | ItemsInContentArea_PortfolioGridBlock_Fragment | ItemsInContentArea_PortfolioItemBlock_Fragment | ItemsInContentArea_ProfileBlock_Fragment | ItemsInContentArea_SeoExperience_Fragment | ItemsInContentArea_ServiceItem_Fragment | ItemsInContentArea_ServicesBlock_Fragment | ItemsInContentArea_SocialLink_Fragment | ItemsInContentArea_StartPage_Fragment | ItemsInContentArea_StoryBlock_Fragment | ItemsInContentArea_SysContentFolder_Fragment | ItemsInContentArea_TestimonialItem_Fragment | ItemsInContentArea_TestimonialItemBlock_Fragment | ItemsInContentArea_TestimonialsBlock_Fragment | ItemsInContentArea_VideoMedia_Fragment | ItemsInContentArea__Component_Fragment | ItemsInContentArea__Content_Fragment | ItemsInContentArea__Experience_Fragment | ItemsInContentArea__Folder_Fragment | ItemsInContentArea__Image_Fragment | ItemsInContentArea__Media_Fragment | ItemsInContentArea__Page_Fragment | ItemsInContentArea__Section_Fragment | ItemsInContentArea__Video_Fragment;

export const ItemsInContentAreaFragmentDoc = gql`
    fragment ItemsInContentArea on _IContent {
  __typename
}
    `;
export const AllPagesDocument = gql`
    query AllPages($pageType: [String]) {
  _Content(where: {_metadata: {types: {in: $pageType}}}) {
    items {
      _metadata {
        displayName
        url {
          base
          internal
          hierarchical
          default
          type
        }
        types
        status
      }
    }
  }
}
    `;
export const GetAllBlogPostsDocument = gql`
    query getAllBlogPosts($locales: [Locales], $limit: Int) {
  BlogPost(locale: $locales, limit: $limit) {
    total
    items {
      title
      subheading
      author
      publishedDate
      _metadata {
        url {
          default
          hierarchical
        }
      }
    }
  }
}
    `;
export const GetBlogPostByUrlDocument = gql`
    query getBlogPostByURL($locales: [Locales], $urlSuffix: String) {
  BlogPost(
    locale: $locales
    where: {_metadata: {url: {default: {endsWith: $urlSuffix}}}}
  ) {
    total
    item {
      title
      subheading
      author
      publishedDate
      body {
        html
        json
      }
      _modified
      _metadata {
        url {
          default
        }
      }
    }
  }
}
    `;
export const GetContentByGuidDocument = gql`
    query GetContentByGuid($guid: String) {
  _Content(where: {_metadata: {key: {eq: $guid}}}) {
    item {
      __typename
      _metadata {
        displayName
        version
        key
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  }
}
    `;
export const GetFooterDocument = gql`
    query getFooter($locales: [Locales]) {
  Footer(locale: $locales) {
    item {
      copyrightText
      socialLinks {
        __typename
        ... on SocialLink {
          platform
          href
        }
      }
      columns {
        __typename
        ... on FooterColumn {
          title
          links {
            __typename
            ... on NavItem {
              label
              href
            }
          }
        }
      }
    }
  }
}
    `;
export const GetPageByUrlDocument = gql`
    query getPageByURL($locales: [Locales], $slug: String) {
  CMSPage(locale: $locales, where: {_metadata: {url: {default: {eq: $slug}}}}) {
    item {
      title
      shortDescription
      keywords
      _modified
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetStartPageDocument = gql`
    query GetStartPage($locales: [Locales]) {
  StartPage(locale: $locales) {
    item {
      title
      shortDescription
      keywords
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetVisualBuilderBySlugDocument = gql`
    query GetVisualBuilderBySlug($locales: [Locales], $slug: String) {
  SEOExperience(
    locale: $locales
    where: {_metadata: {url: {default: {eq: $slug}}}}
  ) {
    item {
      title
      shortDescription
      keywords
      composition {
        nodes {
          nodeType
          key
          displaySettings {
            value
            key
          }
          ... on CompositionComponentNode {
            component {
              ...ItemsInContentArea
            }
          }
          ... on CompositionStructureNode {
            key
            rows: nodes {
              ... on CompositionStructureNode {
                key
                columns: nodes {
                  ... on CompositionStructureNode {
                    key
                    elements: nodes {
                      key
                      displaySettings {
                        value
                        key
                      }
                      ... on CompositionComponentNode {
                        component {
                          ...ItemsInContentArea
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetAllBlogPostVersionsByUrlDocument = gql`
    query GetAllBlogPostVersionsByURL($locales: [Locales], $urlSuffix: String) {
  BlogPost(
    locale: $locales
    where: {_metadata: {url: {default: {endsWith: $urlSuffix}}}}
  ) {
    items {
      _metadata {
        version
      }
      title
      subheading
      author
      publishedDate
      body {
        html
        json
      }
      _modified
    }
  }
}
    `;
export const GetAllPagesVersionByUrlDocument = gql`
    query GetAllPagesVersionByURL($locales: [Locales], $slug: String) {
  CMSPage(locale: $locales, where: {_metadata: {url: {default: {eq: $slug}}}}) {
    items {
      _metadata {
        version
      }
      title
      shortDescription
      keywords
      _modified
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetAllStartPageVersionsDocument = gql`
    query GetAllStartPageVersions($locales: [Locales]) {
  StartPage(locale: $locales) {
    items {
      _metadata {
        version
      }
      title
      shortDescription
      keywords
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetAllVisualBuilderVesrionsBySlugDocument = gql`
    query GetAllVisualBuilderVesrionsBySlug($locales: [Locales], $slug: String) {
  SEOExperience(
    locale: $locales
    where: {_metadata: {url: {default: {eq: $slug}}}}
  ) {
    items {
      _metadata {
        version
      }
      title
      shortDescription
      keywords
      composition {
        nodes {
          nodeType
          key
          displaySettings {
            value
            key
          }
          ... on CompositionComponentNode {
            component {
              ...ItemsInContentArea
            }
          }
          ... on CompositionStructureNode {
            key
            rows: nodes {
              ... on CompositionStructureNode {
                key
                columns: nodes {
                  ... on CompositionStructureNode {
                    key
                    elements: nodes {
                      key
                      displaySettings {
                        value
                        key
                      }
                      ... on CompositionComponentNode {
                        component {
                          ...ItemsInContentArea
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetComponentByKeyDocument = gql`
    query GetComponentByKey($locales: [Locales], $key: String, $version: String) {
  _Component(
    locale: $locales
    where: {_metadata: {key: {eq: $key}}, _or: {_metadata: {version: {eq: $version}}}}
  ) {
    item {
      ...ItemsInContentArea
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetContentByKeyAndVersionDocument = gql`
    query GetContentByKeyAndVersion($key: String, $ver: String) {
  _Content(where: {_metadata: {key: {eq: $key}, version: {eq: $ver}}}) {
    item {
      __typename
      _metadata {
        displayName
        version
        key
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  }
}
    `;
export const GetPreviewBlogPostByUrlDocument = gql`
    query getPreviewBlogPostByURL($locales: [Locales], $urlSuffix: String, $version: String) {
  BlogPost(
    locale: $locales
    where: {_metadata: {version: {eq: $version}}, _and: {_metadata: {url: {default: {endsWith: $urlSuffix}}}}}
  ) {
    total
    item {
      title
      subheading
      author
      publishedDate
      body {
        html
        json
      }
      _modified
    }
  }
}
    `;
export const GetPreviewPageByUrlDocument = gql`
    query getPreviewPageByURL($locales: [Locales], $slug: String, $version: String) {
  CMSPage(
    locale: $locales
    where: {_metadata: {version: {eq: $version}}, _and: {_metadata: {url: {default: {eq: $slug}}}}}
  ) {
    total
    item {
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetPreviewStartPageDocument = gql`
    query GetPreviewStartPage($locales: [Locales], $version: String) {
  StartPage(locale: $locales, where: {_metadata: {version: {eq: $version}}}) {
    item {
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const VisualBuilderDocument = gql`
    query VisualBuilder($locales: [Locales], $key: String, $version: String) {
  SEOExperience(
    locale: $locales
    where: {_metadata: {key: {eq: $key}}, _or: {_metadata: {version: {eq: $version}}}}
  ) {
    item {
      composition {
        nodes {
          nodeType
          key
          displaySettings {
            value
            key
          }
          ... on CompositionComponentNode {
            component {
              ...ItemsInContentArea
            }
          }
          ... on CompositionStructureNode {
            key
            rows: nodes {
              ... on CompositionStructureNode {
                key
                columns: nodes {
                  ... on CompositionStructureNode {
                    key
                    elements: nodes {
                      key
                      displaySettings {
                        value
                        key
                      }
                      ... on CompositionComponentNode {
                        component {
                          ...ItemsInContentArea
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      _metadata {
        key
        version
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    AllPages(variables?: AllPagesQueryVariables, options?: C): Promise<ExecutionResult<AllPagesQuery, E>> {
      return requester<AllPagesQuery, AllPagesQueryVariables>(AllPagesDocument, variables, options) as Promise<ExecutionResult<AllPagesQuery, E>>;
    },
    getAllBlogPosts(variables?: GetAllBlogPostsQueryVariables, options?: C): Promise<ExecutionResult<GetAllBlogPostsQuery, E>> {
      return requester<GetAllBlogPostsQuery, GetAllBlogPostsQueryVariables>(GetAllBlogPostsDocument, variables, options) as Promise<ExecutionResult<GetAllBlogPostsQuery, E>>;
    },
    getBlogPostByURL(variables?: GetBlogPostByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetBlogPostByUrlQuery, E>> {
      return requester<GetBlogPostByUrlQuery, GetBlogPostByUrlQueryVariables>(GetBlogPostByUrlDocument, variables, options) as Promise<ExecutionResult<GetBlogPostByUrlQuery, E>>;
    },
    GetContentByGuid(variables?: GetContentByGuidQueryVariables, options?: C): Promise<ExecutionResult<GetContentByGuidQuery, E>> {
      return requester<GetContentByGuidQuery, GetContentByGuidQueryVariables>(GetContentByGuidDocument, variables, options) as Promise<ExecutionResult<GetContentByGuidQuery, E>>;
    },
    getFooter(variables?: GetFooterQueryVariables, options?: C): Promise<ExecutionResult<GetFooterQuery, E>> {
      return requester<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, variables, options) as Promise<ExecutionResult<GetFooterQuery, E>>;
    },
    getPageByURL(variables?: GetPageByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetPageByUrlQuery, E>> {
      return requester<GetPageByUrlQuery, GetPageByUrlQueryVariables>(GetPageByUrlDocument, variables, options) as Promise<ExecutionResult<GetPageByUrlQuery, E>>;
    },
    GetStartPage(variables?: GetStartPageQueryVariables, options?: C): Promise<ExecutionResult<GetStartPageQuery, E>> {
      return requester<GetStartPageQuery, GetStartPageQueryVariables>(GetStartPageDocument, variables, options) as Promise<ExecutionResult<GetStartPageQuery, E>>;
    },
    GetVisualBuilderBySlug(variables?: GetVisualBuilderBySlugQueryVariables, options?: C): Promise<ExecutionResult<GetVisualBuilderBySlugQuery, E>> {
      return requester<GetVisualBuilderBySlugQuery, GetVisualBuilderBySlugQueryVariables>(GetVisualBuilderBySlugDocument, variables, options) as Promise<ExecutionResult<GetVisualBuilderBySlugQuery, E>>;
    },
    GetAllBlogPostVersionsByURL(variables?: GetAllBlogPostVersionsByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetAllBlogPostVersionsByUrlQuery, E>> {
      return requester<GetAllBlogPostVersionsByUrlQuery, GetAllBlogPostVersionsByUrlQueryVariables>(GetAllBlogPostVersionsByUrlDocument, variables, options) as Promise<ExecutionResult<GetAllBlogPostVersionsByUrlQuery, E>>;
    },
    GetAllPagesVersionByURL(variables?: GetAllPagesVersionByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetAllPagesVersionByUrlQuery, E>> {
      return requester<GetAllPagesVersionByUrlQuery, GetAllPagesVersionByUrlQueryVariables>(GetAllPagesVersionByUrlDocument, variables, options) as Promise<ExecutionResult<GetAllPagesVersionByUrlQuery, E>>;
    },
    GetAllStartPageVersions(variables?: GetAllStartPageVersionsQueryVariables, options?: C): Promise<ExecutionResult<GetAllStartPageVersionsQuery, E>> {
      return requester<GetAllStartPageVersionsQuery, GetAllStartPageVersionsQueryVariables>(GetAllStartPageVersionsDocument, variables, options) as Promise<ExecutionResult<GetAllStartPageVersionsQuery, E>>;
    },
    GetAllVisualBuilderVesrionsBySlug(variables?: GetAllVisualBuilderVesrionsBySlugQueryVariables, options?: C): Promise<ExecutionResult<GetAllVisualBuilderVesrionsBySlugQuery, E>> {
      return requester<GetAllVisualBuilderVesrionsBySlugQuery, GetAllVisualBuilderVesrionsBySlugQueryVariables>(GetAllVisualBuilderVesrionsBySlugDocument, variables, options) as Promise<ExecutionResult<GetAllVisualBuilderVesrionsBySlugQuery, E>>;
    },
    GetComponentByKey(variables?: GetComponentByKeyQueryVariables, options?: C): Promise<ExecutionResult<GetComponentByKeyQuery, E>> {
      return requester<GetComponentByKeyQuery, GetComponentByKeyQueryVariables>(GetComponentByKeyDocument, variables, options) as Promise<ExecutionResult<GetComponentByKeyQuery, E>>;
    },
    GetContentByKeyAndVersion(variables?: GetContentByKeyAndVersionQueryVariables, options?: C): Promise<ExecutionResult<GetContentByKeyAndVersionQuery, E>> {
      return requester<GetContentByKeyAndVersionQuery, GetContentByKeyAndVersionQueryVariables>(GetContentByKeyAndVersionDocument, variables, options) as Promise<ExecutionResult<GetContentByKeyAndVersionQuery, E>>;
    },
    getPreviewBlogPostByURL(variables?: GetPreviewBlogPostByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetPreviewBlogPostByUrlQuery, E>> {
      return requester<GetPreviewBlogPostByUrlQuery, GetPreviewBlogPostByUrlQueryVariables>(GetPreviewBlogPostByUrlDocument, variables, options) as Promise<ExecutionResult<GetPreviewBlogPostByUrlQuery, E>>;
    },
    getPreviewPageByURL(variables?: GetPreviewPageByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetPreviewPageByUrlQuery, E>> {
      return requester<GetPreviewPageByUrlQuery, GetPreviewPageByUrlQueryVariables>(GetPreviewPageByUrlDocument, variables, options) as Promise<ExecutionResult<GetPreviewPageByUrlQuery, E>>;
    },
    GetPreviewStartPage(variables?: GetPreviewStartPageQueryVariables, options?: C): Promise<ExecutionResult<GetPreviewStartPageQuery, E>> {
      return requester<GetPreviewStartPageQuery, GetPreviewStartPageQueryVariables>(GetPreviewStartPageDocument, variables, options) as Promise<ExecutionResult<GetPreviewStartPageQuery, E>>;
    },
    VisualBuilder(variables?: VisualBuilderQueryVariables, options?: C): Promise<ExecutionResult<VisualBuilderQuery, E>> {
      return requester<VisualBuilderQuery, VisualBuilderQueryVariables>(VisualBuilderDocument, variables, options) as Promise<ExecutionResult<VisualBuilderQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;