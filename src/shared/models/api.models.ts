import { ApiEnums } from '~shared/enums';

/**
 * The allowed types of api calls
 */
export type SearchTypes = ApiEnums.REQUEST_TYPES;

/**
 * The api response based on diffrent types
 */
export type TvmazeSearchResponse = SearchResponse;

/**
 * The search Tvmaze API response interface
 */
export interface SearchResponse {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres?: (string | null)[] | null;
  status: string;
  runtime?: number | null;
  averageRuntime?: number | null;
  premiered?: string | null;
  ended?: string | null;
  officialSite?: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: Network | null;
  webChannel?: WebChannel | null;
  dvdCountry?: null;
  externals: Externals;
  image?: Image | null;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Schedule {
  time: string;
  days?: (string | null)[] | null;
}

export interface Rating {
  average?: number | null;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite?: string | null;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface WebChannel {
  id: number;
  name: string;
  country?: null;
  officialSite: string;
}

export interface Externals {
  tvrage?: number | null;
  thetvdb?: number | null;
  imdb?: string | null;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: SelfOrPreviousepisode;
  previousepisode?: SelfOrPreviousepisode1 | null;
}

export interface SelfOrPreviousepisode {
  href: string;
}

export interface SelfOrPreviousepisode1 {
  href: string;
}
