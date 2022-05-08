import React, { ReactElement } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { RoutesEnums } from '~shared/enums';
import { ApiModels } from '~shared/models';
import { SearchFeatureStyles } from '~styles/features';

const { CARD: styles } = SearchFeatureStyles;

interface CardProps {
  item: ApiModels.SearchResponse;
  isLast: boolean;
}

function Card({ item, isLast }: CardProps): ReactElement {
  const navigation = useNavigation();

  const { show } = item;

  return (
    <TouchableOpacity
      style={[styles.container, isLast && styles.lastItem]}
      // Transferring the selected item to the details screen as param
      onPress={() => navigation.navigate(RoutesEnums.ROUTES.DETAILS, { item })}
    >
      <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{
          uri: show.image?.medium,
        }}
      />
      <Text numberOfLines={1} style={styles.title}>
        {show.name}
      </Text>
    </TouchableOpacity>
  );
}

export { Card };
