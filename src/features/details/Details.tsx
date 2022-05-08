import React, { ReactElement } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import { ChevronLeft } from '~assets/images';
import { ApiModels } from '~shared/models';
import { COLORS } from '~styles/defaults';
import { DetailsFeatureStyles } from '~styles/features';

import { Info } from './components/Info';

const { DETAILS: styles } = DetailsFeatureStyles;

/**
 * The main details screen component
 */
function Details(): ReactElement {
  const navigation = useNavigation();

  /**
   * Fetching route params data
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
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 1)',
          ]}
          // Defining gradients break points
          locations={[0.05, 0.4, 0.95]}
        />
      </ImageBackground>
      <Info show={show} />
    </View>
  );
}

export { Details };
