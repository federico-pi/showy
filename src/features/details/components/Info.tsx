import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

import { Rating } from 'react-native-ratings';

import { useOS } from '~hooks';
import { ApiModels } from '~shared/models';
import { DetailsFeatureStyles } from '~styles/features';

const { INFO: styles } = DetailsFeatureStyles;

/**
 * The shape of the props
 */
interface InfoProps {
  show: ApiModels.Show;
}

/**
 * The Info details component
 */
function Info({ show }: InfoProps): ReactElement {
  const { isAndroid } = useOS();

  return (
    <View
      style={[styles.container, styles.content, isAndroid && styles.bottom]}
    >
      <Text numberOfLines={1} style={styles.title}>
        {show.name}
      </Text>
      <Text style={styles.summary} numberOfLines={show.rating.average ? 3 : 4}>
        {/**
         * Parsing html tags from the api summary response
         */}
        {show.summary.replace(/(<([^>]+)>)/gi, '')}
      </Text>
      {show.rating.average && (
        <Rating
          style={styles.rating}
          imageSize={24}
          startingValue={+show.rating.average / 2}
          readonly
          showRating={false}
        />
      )}
    </View>
  );
}

export { Info };
