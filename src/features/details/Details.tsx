import React, { ReactElement } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import { ChevronLeft } from '~assets/images';
import { ApiModels } from '~shared/models';
import { COLORS } from '~styles/defaults';
import { DetailsFeatureStyles } from '~styles/features';

const { DETAILS: styles } = DetailsFeatureStyles;

/**
 * The details screen component
 */
function Details(): ReactElement {
  const navigation = useNavigation();

  /**
   * Fetching params data
   */
  const route: RouteProp<
    {
      params: {
        item: ApiModels.SearchResponse;
      };
    },
    'params'
  > = useRoute();

  const { show } = route.params.item;

  console.log(JSON.stringify(show));

  return (
    <View style={[styles.container, styles.content]}>
      <TouchableOpacity
        style={styles.chevronContainer}
        onPress={() => navigation.goBack()}
      >
        <ChevronLeft stroke={COLORS.OPAQUE} />
      </TouchableOpacity>
      <ImageBackground
        style={styles.image}
        source={{ uri: show.image?.original }}
        resizeMode={'cover'}
      >
        <LinearGradient
          style={styles.gradient}
          colors={[
            /**
             * Specifying colors this way as a library requirement
             */
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 1)',
          ]}
          // Defining the gradient brak points
          locations={[0.05, 0.4, 0.95]}
        />
      </ImageBackground>
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>
          {show.name}
        </Text>
        <Text numberOfLines={3} style={styles.summary}>
          {show.summary
            .replace('<p>', '')
            .replace('</p>', '')
            .replace('<b>', '')
            .replace('</b>', '')}
        </Text>
      </View>
    </View>
  );
}

export { Details };
