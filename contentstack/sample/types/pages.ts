import { Image } from './action';
import { Component } from './component';
import { Entry, HeaderProps, FooterProps } from './layout';

type AdditionalParam = {
  powers: {};
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  banner_title: string;
  banner_description: string;
  designation: string;
  name: string;
  html_code: string;
  body: string;
  date: string;
  related_post: [];
  copyright: string;
  announcement_text: string;
  label: {};
  url: string;
};

type Post = {
  [x: string]: any;
  url: string;
  is_archived: boolean;
  body: string;
  featured_image: Image;
  title: string;
  date: string;
  author: [Author];
  $: AdditionalParam;
};

type Author = {
  title: string;
  $: AdditionalParam;
};

type PageProps = {
  page: Page;
  posts: [];
  archivePost: [];
  blogPost: BlogPosts;
};

type Seo = {
  enable_search_indexing: boolean;
};

type Blog = {
  url: string;
  body: string;
  title: string;
  $: AdditionalParam;
};

type Props = {
  page: Page;
  entryUrl: string;
  Component: Function;
  entries: Entry;
  pageProps: PageProps;
  header: HeaderProps;
  footer: FooterProps;
};

type Page = {
  [x: string]: any;
  page_components: Component[];
  uid: string;
  locale: string;
  url: string;
  seo: Seo;
  title: string;
};

type Context = {
  resolvedUrl: string;
  setHeader: Function;
  write: Function;
  end: Function;
};

type Pages = [page: Page];

type PostPage = [post: Post];

type PageUrl = {
  pageUrl: string;
};

type BlogPosts = {
  modular_blocks: any;
  [x: string]: any;
  title: string;
  date: string;
  body: string;
  author: [Author];
  related_post: [Blog];
  locale: string;
  heading: string;
  featured_image: Image;
  is_archived: boolean;
  characters: any;
  seo: Seo;
  url: string;
  _owner: string;
  $: AdditionalParam;
};

type SuperHeroPosts = {
  [x: string]: any;
  title: string;
  date: string;
  body: string;
  author: [Author];
  related_post: [Blog];
  locale: string;
  featured_image: Image;
  is_archived: boolean;
  seo: Seo;
  url: string;
  _owner: string;
  $: AdditionalParam;
};

export {
  Props,
  Page,
  Context,
  Pages,
  PostPage,
  PageUrl,
  BlogPosts,
  SuperHeroPosts,
};