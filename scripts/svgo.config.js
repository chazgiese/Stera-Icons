export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox for responsive scaling
          removeViewBox: false,
        },
      },
    },
    {
      name: 'removeDimensions',
    },
    {
      name: 'removeXMLNS',
    },
    {
      name: 'convertShapeToPath',
    },
    {
      name: 'removeUselessStrokeAndFill',
    },
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
    {
      name: 'sortAttrs',
    },
    // Ensure fill is set to currentColor for proper theming
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
          },
        ],
      },
    },
  ],
};
