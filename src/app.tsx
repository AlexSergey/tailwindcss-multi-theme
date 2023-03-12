import { useCallback } from 'react';

const DEFAULT_THEME = 'beige';
const SECONDARY_THEME = 'purple';

export const App = () => {
  const changeTheme = useCallback(() => {
    const currentTheme = localStorage.getItem('theme') ?? DEFAULT_THEME;
    const toTheme = currentTheme === DEFAULT_THEME ? SECONDARY_THEME : DEFAULT_THEME;

    const linkTag = document.getElementsByTagName('link')[0] as HTMLLinkElement;
    linkTag.setAttribute('href', `/themes/theme.${toTheme}.css`);

    localStorage.setItem('theme', toTheme);
  }, []);

  return (
    <div className="bg-primary">
      <p className="text-for-primary-500">The quick brown fox jumps over the lazy dog</p>
      <button onClick={changeTheme}>Change theme
      </button>
    </div>
  )
}
