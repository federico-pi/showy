import React, { ReactElement, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';

import { Controller, useForm } from 'react-hook-form';

import { getTvmazeData } from '~api';
import { SearchLens } from '~assets/images';
import { AppHelpers, FiltersHelpers } from '~helpers';
import { ApiEnums, FormsEnums } from '~shared/enums';
import { ApiModels } from '~shared/models';
import { COLORS } from '~styles/defaults';
import { SearchFeatureStyles } from '~styles/features';

import { List } from './components/List';

const { SEARCH: styles, LIST: listStyles } = SearchFeatureStyles;

interface SearchProps {
  mockOnSubmit?: jest.Mock<any, any>;
}

function Search({ mockOnSubmit }: SearchProps): ReactElement {
  const [isFetching, setIsFetching] = useState(false);

  const [shows, setShows] = useState<ApiModels.Show[] | undefined>(undefined);

  const { control, watch, handleSubmit, reset } = useForm();

  const handleError = (e: unknown) => {
    console.error(e);

    reset();
    setIsFetching(false);
    Alert.alert('Something went wrong, try again!');
  };

  const onSubmit = async ({ search }: Record<string, string>) => {
    setIsFetching(true);
    Keyboard.dismiss();

    /**
     * Smoothening the search transition
     * For demo purposes only
     */
    await AppHelpers.sleep(1250);

    try {
      await getTvmazeData({ q: search }, ApiEnums.REQUEST_TYPES.SEARCH).then(
        async (res: any) => {
          if (res.data) {
            let showsList: ApiModels.Show[] = [];

            res.data.forEach((item: ApiModels.SearchResponse) => {
              showsList.push(item.show);
            });

            const response = await FiltersHelpers.getFilteredShows(showsList);

            return setShows(response);
          }

          Alert.alert(
            "Couldn't find shows for your search, try another search!"
          );
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
                testID={name} // 'search'
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
            onPress={handleSubmit(mockOnSubmit ?? onSubmit)}
          >
            <SearchLens testID={'searchicon'} stroke={COLORS.WHITE} />
          </TouchableOpacity>
        </View>
        {isFetching && (
          <ActivityIndicator
            style={styles.loader}
            color={COLORS.PRIMARY}
            size={26}
          />
        )}
        {!isFetching && shows && <List shows={shows} setShows={setShows} />}
      </View>
    </View>
  );
}

export { Search };
