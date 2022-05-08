import { ApiModels } from '.';

/**
 * The props required for each screen
 */
export type RootStackParamList = {
  search: undefined;
  details: { item: ApiModels.SearchResponse };
};
