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

interface DetailsProps {
  mockNavigation?: { goBack: jest.Mock<any, any> };
}

function Details({ mockNavigation }: DetailsProps): ReactElement {
  const navigation = useNavigation();

  /**
   * Fetching data from route params
   */
  const route: RouteProp<
    {
      params: {
        data: ApiModels.Show;
      };
    },
    'params'
  > = useRoute();

  const { data: show } = route.params;

  return (
    <View style={[styles.container, styles.content]}>
      <TouchableOpacity
        style={styles.chevronContainer}
        onPress={() =>
          mockNavigation ? mockNavigation.goBack() : navigation.goBack()
        }
      >
        <ChevronLeft testID={'back'} stroke={COLORS.OPAQUE} />
      </TouchableOpacity>
      <ImageBackground
        style={styles.image}
        source={{ uri: show.image?.original ?? show.image?.medium }}
        resizeMode={'cover'}
      >
        <LinearGradient
          style={styles.gradient}
          colors={[
            // Transitioning from transparent to white
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
