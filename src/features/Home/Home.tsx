import React, { ReactElement } from 'react';
import { View } from 'react-native';

import { HomeFeatureStyles } from '~styles/features';

const { HOME: styles } = HomeFeatureStyles;

/**
 * The main home screen component
 */
function Home(): ReactElement {
  return <View style={styles.container} />;
}

export { Home };
