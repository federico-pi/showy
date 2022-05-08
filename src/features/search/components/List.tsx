import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { Alert, FlatList, ListRenderItemInfo, View } from 'react-native';

import { getTvmazeData } from '~api';
import { FiltersHelpers } from '~helpers';
import { ApiEnums } from '~shared/enums';
import { ApiModels } from '~shared/models';
import { SearchFeatureStyles } from '~styles/features';

import { Card } from './Card';

const { LIST: styles } = SearchFeatureStyles;

interface ListProps {
  shows: ApiModels.Show[];
  setShows: Dispatch<SetStateAction<ApiModels.Show[] | undefined>>;
}

function List({ shows, setShows }: ListProps): ReactElement {
  const [pageParam, setPageParam] = useState(1);

  const keyExtractor = useCallback(
    (item: unknown, index: number) => index.toString(),
    []
  );

  const renderItem = ({ item }: ListRenderItemInfo<ApiModels.Show>) => (
    <Card show={item} />
  );

  const handleError = (e: unknown) => {
    console.error(e);

    setPageParam(1);
    Alert.alert('Something went wrong, try again!');
  };

  const onEndReached = async () => {
    try {
      await getTvmazeData(
        { page: `${pageParam}`, limit: '1' },
        ApiEnums.REQUEST_TYPES.GENERIC
      ).then(async (res) => {
        if (res.data.length) {
          const newFilteredResponse = await FiltersHelpers.getFilteredShows(
            res.data as ApiModels.Show[],
            shows
          );

          return setShows(newFilteredResponse);
        }

        Alert.alert("Couldn't fetch any more data, try another search!");
      });

      setPageParam((prevPage) => prevPage + 1);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <FlatList
      style={styles.grow}
      data={shows}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      initialNumToRender={10}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.spacer} />}
      onEndReachedThreshold={0.2}
      onEndReached={onEndReached}
    />
  );
}

export { List };
