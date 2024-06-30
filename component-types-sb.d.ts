// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export interface AllArticlesStoryblok {
  headline: string;
  component: "allArticles";
  _uid: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface ArticleStoryblok {
  image?: AssetStoryblok;
  title: string;
  teaser?: string;
  content: RichtextStoryblok;
  component: "article";
  _uid: string;
  [k: string]: any;
}

export interface ConfigStoryblok {
  headerMenu?: MenuLinkStoryblok[];
  footerSocmed?: FooterSocmedLinkStoryblok[];
  component: "config";
  _uid: string;
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  image?: AssetStoryblok;
  component: "feature";
  _uid: string;
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface FooterSocmedLinkStoryblok {
  title: string;
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  component: "footerSocmedLink";
  _uid: string;
  [k: string]: any;
}

export interface GalleryImagesStoryblok {
  image?: AssetStoryblok;
  component: "galleryImages";
  _uid: string;
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | AllArticlesStoryblok
    | ArticleStoryblok
    | ConfigStoryblok
    | FeatureStoryblok
    | FooterSocmedLinkStoryblok
    | GalleryImagesStoryblok
    | GridStoryblok
    | HeroStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PopularArticlesStoryblok
    | SectionSeeServiceStoryblok
    | TeaserStoryblok
    | TextsWithButtonStoryblok
    | TrustByStoryblok
  )[];
  component: "grid";
  _uid: string;
  [k: string]: any;
}

export interface HeroStoryblok {
  headline?: string;
  subheadline?: string;
  background_image?: AssetStoryblok;
  layout?: "" | "constrained" | "full-width";
  component: "hero";
  _uid: string;
  [k: string]: any;
}

export interface MenuLinkStoryblok {
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  component: "menuLink";
  _uid: string;
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | AllArticlesStoryblok
    | ArticleStoryblok
    | ConfigStoryblok
    | FeatureStoryblok
    | FooterSocmedLinkStoryblok
    | GalleryImagesStoryblok
    | GridStoryblok
    | HeroStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PopularArticlesStoryblok
    | SectionSeeServiceStoryblok
    | TeaserStoryblok
    | TextsWithButtonStoryblok
    | TrustByStoryblok
  )[];
  component: "page";
  _uid: string;
  [k: string]: any;
}

export interface PopularArticlesStoryblok {
  headline?: string;
  articles?: (ISbStoryData<ArticleStoryblok> | string)[];
  component: "popular-articles";
  _uid: string;
  [k: string]: any;
}

export interface SectionSeeServiceStoryblok {
  bannerImage?: AssetStoryblok;
  textsWithButton: TextsWithButtonStoryblok[];
  component: "sectionSeeService";
  _uid: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  component: "teaser";
  _uid: string;
  [k: string]: any;
}

export interface TextsWithButtonStoryblok {
  headline?: string;
  subheadline?: string;
  primaryText?: string;
  textButton?: string;
  linkButton?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  component: "textsWithButton";
  _uid: string;
  [k: string]: any;
}

export interface TrustByStoryblok {
  title?: string;
  image?: GalleryImagesStoryblok[];
  component: "trustBy";
  _uid: string;
  [k: string]: any;
}
