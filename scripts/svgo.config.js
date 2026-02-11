export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox for responsive scaling
          removeViewBox: false,
          // Optimize path data with reduced precision
          convertPathData: {
            floatPrecision: 2,
            transformPrecision: 2,
          },
          // Clean up numeric values
          cleanupNumericValues: {
            floatPrecision: 2,
          },
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
      name: 'sortAttrs',
    },
    // Remove fill attributes from paths/circles so they inherit
    // fill from the parent <svg> element set by IconBase
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill'],
        elemSeparator: ',',
        preserveCurrentColor: false,
      },
    },
  ],
};
