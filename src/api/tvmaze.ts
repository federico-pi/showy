import remoteConfig from '@react-native-firebase/remote-config';
import axios from 'axios';
import qs from 'qs';
import { UseQueryResult, useQuery } from 'react-query';

import { BASE_URL } from '~env';
import { useHeaders, Headers } from '~hooks';
import { QueriesEnums } from '~shared/enums';
import { ResponseSchemaVoidReadDemaDataDtoDemaRequestError } from '~shared/models/api';

const BASEURL = remoteConfig().getString('BASE_URL');

/**
 * Getting the prescription details
 */
export async function getTvmazeData(
  nre: string,
  citizenTaxCode: string,
  headers: Headers['headers']
): Promise<ResponseSchemaVoidReadDemaDataDtoDemaRequestError> {
  const url = `${BASEURL.length ? BASEURL : BASE_URL}/dema/get-data`;

  console.log(url);

  const params = {
    nre: nre.toUpperCase(),
    citizenTaxCode: citizenTaxCode.toUpperCase(),
  };

  return axios
    .get(url, {
      params,
      paramsSerializer: (parameters) => qs.stringify(parameters),
      headers,
    })
    .then((res) => res.data);
}

/**
 * Using the prescription data
 */
export function useTvmazeData(
  nre: string,
  citizenTaxCode: string,
  options?: any
): UseQueryResult<ResponseSchemaVoidReadDemaDataDtoDemaRequestError> {
  const { headers } = useHeaders();

  return useQuery(
    QueriesEnums.QUERY_KEYS.DEMA,
    () => getDemaData(nre, citizenTaxCode, headers),
    {
      ...options,
      enabled: !!nre && !!citizenTaxCode,
    }
  );
}
