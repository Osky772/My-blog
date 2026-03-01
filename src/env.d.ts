/// <reference path="../.astro/types.d.ts" />

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    value?: string;
  }
}

declare let AtmbThemeProvider: {
  updatePickers: (theme?: string) => void;
};