import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

import { useTranslation } from 'react-i18next';

import { MainStyles } from '~styles/components';

const { MAIN: styles } = MainStyles;

/**
 * Main application component
 */
function Main(): ReactElement {
  const { t } = useTranslation('misc');

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{t('welcome')}</Text>
    </View>
  );
}

export { Main };
