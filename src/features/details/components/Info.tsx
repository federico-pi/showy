import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

import { Rating } from 'react-native-ratings';

import { useOS } from '~hooks';
import { ApiEnums } from '~shared/enums';
import { ApiModels } from '~shared/models';
import { FONTS } from '~styles/defaults';
import { DetailsFeatureStyles } from '~styles/features';

const { INFO: styles } = DetailsFeatureStyles;

interface InfoProps {
  show: ApiModels.Show;
}

function Info({ show }: InfoProps): ReactElement {
  const { isAndroid } = useOS();

  return (
    <View
      style={[styles.container, styles.content, isAndroid && styles.bottom]}
    >
      <Text numberOfLines={1} style={styles.title}>
        {show.name}
      </Text>
      <Text style={styles.summary} numberOfLines={3}>
        {/**
         * Filtering html tags from the api summary response
         */}
        {show.summary.replace(/(<([^>]+)>)/gi, '')}
      </Text>
      <View style={show.rating.average && styles.extra}>
        <View>
          <View style={styles.status}>
            <Text style={styles.label}>{'Premiered:'}</Text>
            <Text style={styles.aired}>
              {show.premiered?.split('-').reverse().join('-')}
            </Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.label}>{'Status:'}</Text>
            <Text
              style={[
                styles.aired,
                show.status &&
                  show.status === ApiEnums.SHOW_STATUS.ENDED && {
                    fontFamily: FONTS.POPPINS_REGULAR_400,
                  },
              ]}
            >
              {show.status && show.status === ApiEnums.SHOW_STATUS.ENDED
                ? 'Ended ' + show.ended?.split('-').reverse().join('-')
                : 'Currently airing'}
            </Text>
          </View>
        </View>
        {show.rating.average && (
          <Rating
            style={styles.rating}
            showRating={false}
            startingValue={+show.rating.average / 2}
            imageSize={20}
            readonly
          />
        )}
      </View>
    </View>
  );
}

export { Info };
