// config
import { defaultSettings, cookiesKey } from "../config";

// ----------------------------------------------------------------------

export const getSettings = (cookies) => {
  const themeMode =
    getData(cookies[cookiesKey.themeMode]) || defaultSettings.themeMode;

  const themeDirection =
    getData(cookies[cookiesKey.themeDirection]) ||
    defaultSettings.themeDirection;

  const themeColorPresets =
    getData(cookies[cookiesKey.themeColorPresets]) ||
    defaultSettings.themeColorPresets;

  const themeLayout =
    getData(cookies[cookiesKey.themeLayout]) || defaultSettings.themeLayout;

  const themeStretch =
    getData(cookies[cookiesKey.themeStretch]) || defaultSettings.themeStretch;

  return {
    themeMode,
    themeDirection,
    themeColorPresets,
    themeLayout,
    themeStretch,
  };
};

// ----------------------------------------------------------------------

const getData = (value) => {
  if (value === "true" || value === "false") {
    return JSON.parse(value);
  }
  if (value === "undefined" || !value) {
    return "";
  }
  return value;
};

export const getNeededInfo = (article) => {
  const { id, date, content, excerpt, slug, title, status, type, parsely } =
    article;
  return {
    id,
    date,
    content: content.rendered,
    excerpt:
      excerpt.rendered.substring(0, excerpt.rendered.length - 15) + "...</p>",
    slug,
    title: title.rendered,
    status,
    type,
    image: parsely.meta.image.url,
  };
};
