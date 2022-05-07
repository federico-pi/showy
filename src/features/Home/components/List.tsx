import React, { ReactElement, useCallback } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import _ from 'lodash';

import { SharedHelpers } from '~helpers';

import { ApiModels } from '~shared/models';
import { HomeFeatureStyles } from '~styles/features';

import { Card } from './Card';

const { LIST: styles } = HomeFeatureStyles;

/**
 * The shape of the props
 */
interface ListProps {
  shows: ApiModels.SearchResponse[];
}

/**
 * The list component to render the shows as cards
 */
function List({ shows }: ListProps): ReactElement {
  /**
   * Filtering only the shows with image or title (for challenge purposes only)
   */
  const filteredShows = useCallback(
    (
      showsUnfiltered: ApiModels.SearchResponse[]
    ): ApiModels.SearchResponse[] => {
      let list: ApiModels.SearchResponse[] = [];

      showsUnfiltered.forEach((show: ApiModels.SearchResponse) => {
        const { show: item } = show;
        if (!!item.image && !!item.name && !_.has(list, item.name)) {
          list.push(show);
        }
      });

      return list;
    },
    []
  );

  /**
   * Rendering the card items
   */
  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<ApiModels.SearchResponse>) => {
      const isLast =
        filteredShows(shows).length > 1 &&
        filteredShows(shows).length - 1 === index;

      return <Card item={item} isLast={isLast} />;
    },
    [filteredShows, shows]
  );

  return (
    <FlatList
      data={filteredShows(shows)}
      ItemSeparatorComponent={() => <View style={styles.spacer} />}
      keyExtractor={SharedHelpers.keyExtractor()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

export { List };
