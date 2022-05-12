const sizes = {
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px',
  };

  export const devices = {
    mobileOnly: `(max-width: ${sizes.tablet})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };