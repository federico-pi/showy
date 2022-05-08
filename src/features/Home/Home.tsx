import React, { ReactElement, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';

import { AxiosResponse } from 'axios';
import { Controller, useForm } from 'react-hook-form';

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
  const [isFetching, setIsFetching] = useState(false);

  const [shows, setShows] = useState<ApiModels.SearchResponse[] | undefined>(
    undefined
  );

  /**
   * The search input handler
   */
  const { control, watch, handleSubmit, reset } = useForm();

  const handleError = (e: unknown) => {
    console.error(e);
    reset();
    setIsFetching(false);
    Alert.alert('Oh no. Something went wrong!');
  };

  const onSubmit = async ({ search }: Record<string, string>) => {
    setIsFetching(true);
    Keyboard.dismiss();

    /**
     * Smoothening search to loader transition
     * For demo purposes only
     */
    await AppHelpers.sleep(1250);

    try {
      await getTvmazeData({ q: search }, ApiEnums.REQUEST_TYPES.SEARCH).then(
        (res: AxiosResponse<ApiModels.TvmazeSearchResponse[]>) => {
          if (res.data.length) {
            return setShows(res.data as ApiModels.SearchResponse[]);
          }

          Alert.alert("Couldn't find shows for your search, please try again!");
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
      <View style={[listStyles.container, styles.content]}>
        <View style={styles.searchWrapper}>
          <Controller
            control={control}
            name={FormsEnums.FORM_FIELDS.SEARCH} // 'search'
            rules={{ required: true }}
            render={({ field: { name, value, onChange } }) => (
              <TextInput
                style={styles.input}
                placeholder={
                  shows ? 'Perform another search' : 'Search for a show'
                }
                accessibilityLabel={name}
                value={value}
                onChangeText={onChange}
                autoCorrect={false}
                autoCapitalize={'none'}
              />
            )}
          />
          <TouchableOpacity
            disabled={!watch().search || isFetching}
            style={[
              styles.iconContainer,
              (!watch().search || isFetching) && {
                ...styles.iconContainer,
                backgroundColor: COLORS.GRAY,
              },
            ]}
            onPress={handleSubmit(onSubmit)}
          >
            <SearchLens
              accessibilityLabel={'pressableicon'}
              stroke={COLORS.WHITE}
            />
          </TouchableOpacity>
        </View>
        {isFetching && <ActivityIndicator color={COLORS.PRIMARY} size={26} />}
        {!isFetching && shows && <List shows={shows} />}
      </View>
    </View>
  );
}

export { Home };
