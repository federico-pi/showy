import _ from 'lodash';

import { ApiModels } from '~shared/models';

/**
 * Making sure each show has an image, a name, a summary, and isn't already in the list
 * For demo purposes only
 */
export async function getFilteredShows(
  unfilteredShows: ApiModels.Show[],
  previousShows?: ApiModels.Show[]
): Promise<ApiModels.Show[]> {
  let list: ApiModels.Show[] = previousShows ?? [];

  unfilteredShows.forEach((show: ApiModels.Show, index) => {
    if (
      index < 15 &&
      show.image?.medium &&
      show.name &&
      show.summary &&
      (!_.has(list, show.name) || !_.has(list, show.id))
    ) {
      return list.push(show);
    }
  });

  return list;
}
