import { ApiModels } from '.';

/**
 * The props required for each screen
 */
export type RootStackParamList = {
  home: undefined;
  details: { item: ApiModels.SearchResponse };
};
