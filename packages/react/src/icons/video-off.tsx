var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const VideoOff = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) =>
      /*#__PURE__*/ _reactJsxRuntime.jsx("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M.229 4.365a1 1 0 0 1 1.407-.136l17 14a1 1 0 0 1-1.272 1.543l-1.5-1.235q-.023.015-.047.028c-.486.247-1.003.345-1.565.391-.55.045-1.228.044-2.052.044H6.8c-.823 0-1.501.001-2.052-.044-.562-.046-1.08-.144-1.564-.391a4 4 0 0 1-1.748-1.748c-.248-.486-.346-1.003-.392-1.565C1 14.702 1 14.024 1 13.2v-2.4c0-.823 0-1.501.044-2.052.046-.562.144-1.079.392-1.564q.094-.186.207-.36L.364 5.773A1 1 0 0 1 .23 4.365m2.98 3.749c-.076.155-.138.379-.172.797-.036.45-.037 1.033-.037 1.89v2.4c0 .856 0 1.438.037 1.888.036.438.101.663.18.82.193.376.499.682.875.873.156.08.381.145.82.181C5.361 17 5.943 17 6.8 17h5.4c.779 0 1.33-.002 1.762-.03zM12.2 5c.824 0 1.502 0 2.052.044.562.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.345 1.002.391 1.564q.006.096.01.197l3.41-2.726A1.001 1.001 0 0 1 23 7v10a1.001 1.001 0 0 1-1.625.782l-5-4A1 1 0 0 1 16 13v-2.2c0-.856 0-1.439-.037-1.889-.036-.438-.101-.662-.18-.819a2 2 0 0 0-.875-.874c-.156-.08-.38-.145-.819-.18C13.639 7 13.057 7 12.2 7H6.934a1 1 0 0 1 0-2zm5.8 6.48v1.039l3 2.4V9.08z",
          clipRule: "evenodd",
        }),
      }))
);
VideoOff.displayName = "VideoOff";
export { VideoOff };
export default VideoOff;
