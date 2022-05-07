import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { UseQueryResult, useQuery } from 'react-query';

import { BASE_URL } from '~env';
import { ApiEnums, QueriesEnums } from '~shared/enums';
import { ApiModels } from '~shared/models';

/**
 * Getting the data from tvmaze api
 * @param params
 * @param searchType
 * @returns Promise<ResponseModels.ResponseSchema<ApiModels.TvmazeSearchResponse>>
 */
export async function getTvmazeData(
  params: Record<string, string>,
  searchType: ApiModels.SearchTypes
): Promise<AxiosResponse<ApiModels.TvmazeSearchResponse[]>> {
  let url: string;

  /**
   * Iplemented API call in a way that could be easily scaled to multiple requests
   */
  switch (searchType) {
    case ApiEnums.SEARCH_TYPES.SEARCH:
    default:
      url = `${BASE_URL}/search/shows`;

      return axios.get(url, {
        params,
        paramsSerializer: (parameters) => qs.stringify(parameters),
      }) as Promise<AxiosResponse<ApiModels.SearchResponse[]>>;
  }
}

/**
 * Using the data from tvmaze
 * @param params
 * @param searchType
 * @param options
 * @returns
 */
export function useTvmazeData(
  params: Record<string, string>,
  searchType: ApiModels.SearchTypes,
  options?: any
): UseQueryResult<Promise<AxiosResponse<ApiModels.TvmazeSearchResponse[]>>> {
  return useQuery(
    QueriesEnums.QUERY_KEYS.TVMAZE,
    () => getTvmazeData(params, searchType),
    {
      ...options,
      enabled: !!searchType,
    }
  );
}
