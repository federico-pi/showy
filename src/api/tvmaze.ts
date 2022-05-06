import axios from 'axios';
import qs from 'qs';
import { UseQueryResult, useQuery } from 'react-query';

import { BASE_URL } from '~env';
import { QueriesEnums } from '~shared/enums';

/**
 * Getting the data from tvmaze api
 * @param params
 * @param searchType
 * @returns Promise<void>
 */
export async function getTvmazeData(
  params: Record<string, string>,
  searchType: string
): Promise<void> {
  const url = `${BASE_URL}/${searchType}`;

  return axios
    .get(url, {
      params,
      paramsSerializer: (parameters) => qs.stringify(parameters),
    })
    .then((res) => res.data);
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
  searchType: string,
  options?: any
): UseQueryResult<void> {
  return useQuery(
    QueriesEnums.QUERY_KEYS.TVMAZE,
    () => getTvmazeData(params, searchType),
    {
      ...options,
      enabled: !!searchType,
    }
  );
}
