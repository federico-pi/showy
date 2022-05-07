import { ApiModels } from '.';

/**
 * The shape of the routes
 */
export interface Routes {
  HOME: 'home';
  DETAILS: 'details';
}

/**
 * The props required for each screen
 */
export type RootStackParamList = {
  home: undefined;
  details: { item: ApiModels.SearchResponse };
};
