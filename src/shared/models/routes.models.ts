import { ApiModels } from '.';

/**
 * Defining the params for each screen
 */
export type RootStackParamList = {
  search: undefined;
  details: { data: ApiModels.Show };
};
