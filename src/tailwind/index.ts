import angieTokens from "@digitalservice4germany/style-dictionary/tailwind";
import plugin from "tailwindcss/plugin";

export const RisUiPreset = angieTokens;

export const RisUiPlugin = plugin(({ theme, addBase, addComponents }) => {
  addBase({
    body: {
      color: theme("colors.black"),
      fontFamily: theme("fontFamily.font-family-sans"),
    },

    "::placeholder": {
      fontFamily: theme("fontFamily.font-family-sans"),
      fontStyle: "normal",
    },
  });

  addComponents({
    ".ris-title-regular": {
      fontSize: "64px",
      fontWeight: "normal",
      lineHeight: "1.1875",
    },

    ".ris-heading1-regular": {
      fontSize: "48px",
      fontWeight: "normal",
      lineHeight: "1.2",
    },

    ".ris-heading1-bold": {
      fontSize: "48px",
      fontWeight: "bold",
      lineHeight: "1.2",
    },

    // TODO: Heading 1 mobile

    ".ris-heading2-regular": {
      fontSize: "32px",
      fontWeight: "normal",
      lineHeight: "1.1875",
    },

    ".ris-heading2-bold": {
      fontSize: "32px",
      fontWeight: "bold",
      lineHeight: "1.1875",
    },

    ".ris-heading3-regular": {
      fontSize: "26px",
      fontWeight: "normal",
      lineHeight: "1.23",
    },

    ".ris-heading3-bold": {
      fontSize: "26px",
      fontWeight: "bold",
      lineHeight: "1.23",
    },

    ".ris-subhead-regular": {
      fontSize: "20px",
      fontWeight: "normal",
      lineHeight: "1.5",
    },

    ".ris-body1-regular": {
      fontSize: "18px",
      fontWeight: "normal",
      lineHeight: "1.5",
    },

    ".ris-body1-bold": {
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: "1.5",
    },

    ".ris-body2-regular": {
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "1.5",
    },

    ".ris-body2-bold": {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "1.5",
    },

    ".ris-body3-regular": {
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "1.5",
    },

    ".ris-body3-bold": {
      fontSize: "14px",
      fontWeight: "bold",
      lineHeight: "1.5",
    },

    ".ris-label1-regular": {
      fontSize: "18px",
      fontWeight: "normal",
      lineHeight: "1.25",
    },

    ".ris-label1-bold": {
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: "1.25",
    },

    ".ris-label2-regular": {
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "1.25",
    },

    ".ris-label2-bold": {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "1.25",
    },

    ".ris-label3-regular": {
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "1.25",
    },

    ".ris-label3-bold": {
      fontSize: "14px",
      fontWeight: "bold",
      lineHeight: "1.25",
    },

    ".ris-link1-regular": {
      color: theme("colors.blue.800"),
      fontSize: "18px",
      fontWeight: "normal",
      lineHeight: "1.5",
      textDecoration: "underline",
    },

    ".ris-link1-bold": {
      color: theme("colors.blue.800"),
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: "1.5",
      textDecoration: "underline",
    },

    ".ris-link2-regular": {
      color: theme("colors.blue.800"),
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "1.5",
      textDecoration: "underline",
    },

    ".ris-link2-bold": {
      color: theme("colors.blue.800"),
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "1.5",
      textDecoration: "underline",
    },

    ".ris-link3-regular": {
      color: theme("colors.blue.800"),
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "1.5",
      textDecoration: "underline",
    },

    ".ris-link3-bold": {
      color: theme("colors.blue.800"),
      fontSize: "14px",
      fontWeight: "bold",
      lineHeight: "1.5",
      textDecoration: "underline",
    },
  });
});
