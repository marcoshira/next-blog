export type MetadataAuthor = {
  data: DataAuthor;
};

export type DataAuthor = {
  id: string;
  attributes: AttributesAuthor;
};

export type AttributesAuthor = {
  displayName: string;
  slug: string;
};

export type MetadataTC = {
  data: DataTC[];
};

export type DataTC = {
  id: string;
  attributes: AttributesTC;
};

export type AttributesTC = {
  displayName: string;
  slug: string;
};
