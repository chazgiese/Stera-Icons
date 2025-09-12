const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Bag = memo(
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
          d: "M12 1a5 5 0 0 1 5 5v.028l.252.016c.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v5.4c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H8.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 18.702 3 18.024 3 17.2v-5.4c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392q.122-.009.252-.016V6a5 5 0 0 1 5-5M8.8 8c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82C5 10.361 5 10.942 5 11.8v5.4c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18C7.361 21 7.942 21 8.8 21h6.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18a2 2 0 0 0 .873-.875c.08-.156.145-.38.18-.82.038-.45.038-1.031.038-1.888v-5.4c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18C16.639 8 16.058 8 15.2 8zM12 3a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3",
          clipRule: "evenodd",
        }),
      }))
);
Bag.displayName = "Bag";
export { Bag };
