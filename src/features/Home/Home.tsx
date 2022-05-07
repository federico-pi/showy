import React, { ReactElement, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { AxiosResponse } from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { getTvmazeData } from '~api';
import { SearchLens } from '~assets/images';
import { AppHelpers } from '~helpers';
import { ApiEnums, FormsEnums } from '~shared/enums';
import { ApiModels } from '~shared/models';
import { COLORS } from '~styles/defaults';
import { HomeFeatureStyles } from '~styles/features';

import { List } from './components/List';

const { HOME: styles, LIST: listStyles } = HomeFeatureStyles;

/**
 * The main home screen component
 */
function Home(): ReactElement {
  const { t } = useTranslation(['home', 'commons']);

  const [isFetching, setIsFetching] = useState(false);

  const [shows, setShows] = useState<ApiModels.SearchResponse[] | undefined>(
    undefined
  );

  /**
   * The form handler
   */
  const { control, watch, handleSubmit, reset } = useForm();

  const handleError = (e: unknown) => {
    console.error(e);
    reset();
    setIsFetching(false);
    Alert.alert(t('commons:errors.generic'));
  };

  const onSubmit = async ({ search }: Record<string, string>) => {
    setIsFetching(true);

    // For transitioning loader smoothly
    await AppHelpers.sleep(1750);

    try {
      await getTvmazeData({ q: search }, ApiEnums.SEARCH_TYPES.SEARCH).then(
        (res: AxiosResponse<ApiModels.TvmazeSearchResponse[]>) => {
          if (res.data.length) {
            return setShows(res.data as ApiModels.SearchResponse[]);
          }

          Alert.alert(t('home:errors.empty-search'));
        }
      );

      reset();
      setIsFetching(false);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <View style={[styles.container, styles.content]}>
      {isFetching && <ActivityIndicator color={COLORS.PRIMARY} size={26} />}
      {!isFetching && (
        <View style={[listStyles.container, styles.content]}>
          <View style={styles.searchWrapper}>
            <Controller
              control={control}
              name={FormsEnums.FORM_FIELDS.SEARCH} // 'search'
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  style={styles.input}
                  placeholder={
                    shows
                      ? t('home:research-placeholder')
                      : t('home:placeholder')
                  }
                  value={value}
                  onChangeText={onChange}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                />
              )}
            />
            <TouchableOpacity
              disabled={!watch().search}
              style={[
                styles.iconContainer,
                !watch().search && {
                  ...styles.iconContainer,
                  backgroundColor: COLORS.GRAY,
                },
              ]}
              onPress={handleSubmit(onSubmit)}
            >
              <SearchLens stroke={COLORS.WHITE} />
            </TouchableOpacity>
          </View>
          {shows && <List shows={shows} />}
        </View>
      )}
    </View>
  );
}

export { Home };
