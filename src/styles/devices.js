const sizes = {
  tablet: "768px",
  laptop: "768px",
  desktop: "1024px",
};

export const devices = {
  mobileOnly: `(max-width: ${sizes.tablet})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
