import React, { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ChevronLeft } from '~assets/images';
import { DetailsFeatureStyles } from '~styles/features';

const { DETAILS: styles } = DetailsFeatureStyles;

/**
 * The details screen component
 */
function Details(): ReactElement {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, styles.content]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ChevronLeft />
      </TouchableOpacity>
    </View>
  );
}

export { Details };
