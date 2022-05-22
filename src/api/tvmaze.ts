import axios, { AxiosResponse } from 'axios';
import qs from 'qs';

import { BASE_URL } from '~env';
import { ApiEnums } from '~shared/enums';
import { ApiModels } from '~shared/models';

/**
 * Getting the data from tvmaze api
 * @param params
 * @param ApiModels.TypeOfSearch
 */
export async function getTvmazeData(
  params: Record<string, string>,
  searchType: ApiModels.TypeOfSearch
): Promise<AxiosResponse<ApiModels.TvmazeSearchResponse>> {
  let url: string;

  /**
   * Iplemented in a way that could be scaled to different types of searches
   */
  switch (searchType) {
    case ApiEnums.REQUEST_TYPES.SEARCH:
      url = `${BASE_URL}/search/shows`;

      return axios.get(url, {
        params,
        paramsSerializer: (parameters) => qs.stringify(parameters),
      }) as Promise<AxiosResponse<ApiModels.SearchResponse[]>>;
    case ApiEnums.REQUEST_TYPES.GENERIC:
    default:
      url = `${BASE_URL}/shows`;

      return axios.get(url, {
        params,
        paramsSerializer: (parameters) => qs.stringify(parameters),
      }) as Promise<AxiosResponse<ApiModels.Show[]>>;
  }
}
