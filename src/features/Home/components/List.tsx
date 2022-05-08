import React, { ReactElement, useCallback } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import _ from 'lodash';

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
 * The list of shows
 */
function List({ shows }: ListProps): ReactElement {
  const keyExtractor = useCallback(
    (item: unknown, index: number) => index.toString(),
    []
  );

  /**
   * Making sure each show has an image, a name, a summary, and isn't already in the list
   * For UI only purposes
   */
  const filteredShows = useCallback(
    (
      showsUnfiltered: ApiModels.SearchResponse[]
    ): ApiModels.SearchResponse[] => {
      let list: ApiModels.SearchResponse[] = [];

      showsUnfiltered.forEach((show: ApiModels.SearchResponse) => {
        const { show: item } = show;
        if (
          !!item.image &&
          !!item.name &&
          !!item.summary &&
          (!_.has(list, item.name) || !_.has(list, item.id))
        ) {
          // Pushing shows with a rating at the start
          if (item.rating.average) {
            return list.unshift(show);
          }

          return list.push(show);
        }
      });

      return list;
    },
    []
  );

  /**
   * Rendering the card items
   */
  const renderItem = ({
    item,
    index,
  }: ListRenderItemInfo<ApiModels.SearchResponse>) => {
    const isLast =
      filteredShows(shows).length > 1 &&
      filteredShows(shows).length - 1 === index;

    return <Card item={item} isLast={isLast} />;
  };

  return (
    <FlatList
      style={styles.grow}
      horizontal
      data={filteredShows(shows)}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.spacer} />}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

export { List };
