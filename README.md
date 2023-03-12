# Tailwindcss Multi Theme

A simple solution for App theming.

## Idea

The Tailwindcss configuration is moved to separate PostCSS configurations and connected globally in HTML (index.ejs).
Each of tailwindcss config generates its own CSS file with the target theme.

During application loading, the theme selected by the user is got from local storage and placed in the HTML Head
section. When changing the theme, the link tag is replaced by the new theme and the name of the new theme will be saved
to the local storage.

The theme code is located in the "style" folder.

Component styles should not include theme elements but use classes from tailwindcss configs from themes.

To generate themes run the code:

```shell
npm run themes
```
