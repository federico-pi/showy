import React, { ReactElement } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { RoutesEnums } from '~shared/enums';
import { ApiModels } from '~shared/models';
import { SearchFeatureStyles } from '~styles/features';

const { CARD: styles } = SearchFeatureStyles;

interface CardProps {
  show: ApiModels.Show;
}

function Card({ show }: CardProps): ReactElement {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      // Transferring the selected item to the details screen as param
      onPress={() =>
        navigation.navigate(RoutesEnums.ROUTES.DETAILS, { data: show })
      }
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
