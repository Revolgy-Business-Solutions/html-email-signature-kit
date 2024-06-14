export const FONT_FAMILIES = [
  { name: "Default", styleName: "unset" },
  {
    name: "Arial",
    styleName: "Arial,Helvetica Neue,Helvetica,sans-serif",
  },
  {
    name: "Courier New",
    styleName:
      "Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace",
  },
  { name: "Georgia", styleName: "Georgia,Times,Times New Roman,serif" },
  { name: "Lucida Sans", styleName: "Lucida Sans" },
  {
    name: "Palatino",
    styleName:
      "Palatino,Palatino Linotype,Palatino LT STD,Book Antiqua,Georgia,serif;",
  },
  {
    name: "Sans serif",
    styleName:
      "sans serif,sans-serif,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol, Noto Color Emoji",
  },
  {
    name: "Serif",
    styleName: "serif,ui-serif,Georgia,Cambria,Times New Roman,Times",
  },
  { name: "Tahoma", styleName: "Tahoma,Verdana,Segoe,sans-serif" },
  {
    name: "Times New Roman",
    styleName: "TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif",
  },
  {
    name: "Trebuchet MS",
    styleName:
      "Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif",
  },
  { name: "Verdana", styleName: "Verdana,Geneva,sans-serif" },
]

export const SIGNATURE_FIELDS = {
  LOGO: "LOGO",
  FULL_NAME: "FULL_NAME",
  POSITION: "POSITION",
  ORGANIZATION_NAME: "ORGANIZATION_NAME",
  ORGANIZATION_EMAIL: "ORGANIZATION_EMAIL",
  ORGANIZATION_PHONE: "ORGANIZATION_PHONE",
  ADDRESS: "ADDRESS",
  PERSONAL_PHONE: "PERSONAL_PHONE",
  COMPANY_PHONE: "COMPANY_PHONE",
  PERSONAL_PHOTO: "PERSONAL_PHOTO",
  PERSONAL_EMAIL: "PERSONAL_EMAIL",
  PERSONAL_ADDRESS: "PERSONAL_ADDRESS",
  COMPANY_ADDRESS: "COMPANY_ADDRESS",
  WEBSITE: "WEBSITE",
  LOGO_LINK: "LOGO_LINK",
  CUSTOM_ATTRIBUTE: "CUSTOM_ATTRIBUTE",
}

export const SIGNATURE_NAMES = {
  HAYEK: "Hayek",
  MISES: "Mises",
  SCHUMPETER: "Schumpeter",
}

export const SOCIALS_FIELDS = {
  FACEBOOK: "facebook",
  LINKEDIN: "linkedin",
  TWITTER: "twitter",
  YOUTUBE: "youtube",
  INSTAGRAM: "instagram",
  DRIBBBLE: "dribbble",
}

export function addHttps(url) {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = "https://" + url
  }
  return url
}
