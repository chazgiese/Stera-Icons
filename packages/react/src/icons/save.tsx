const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Save = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M16 3c.881 0 1.468-.005 1.976.096a5 5 0 0 1 3.928 3.928C22.005 7.532 22 8.12 22 9v4c0 1.383 0 2.481-.071 3.365-.073.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C15.481 22 14.383 22 13 22h-2c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.481 2 14.384 2 13V9c0-.881-.005-1.468.096-1.976a5 5 0 0 1 3.928-3.928C6.532 2.995 7.12 3 8 3a1 1 0 1 1 0 2c-.977 0-1.32.005-1.585.058a3 3 0 0 0-2.357 2.357C4.005 7.68 4 8.023 4 9v4c0 1.416 0 2.419.064 3.202.063.772.183 1.244.371 1.614a4 4 0 0 0 1.749 1.749c.37.188.842.307 1.614.37C8.58 20 9.584 20 11 20h2c1.416 0 2.419 0 3.202-.064.772-.064 1.244-.183 1.614-.372a4 4 0 0 0 1.748-1.748c.19-.37.308-.842.372-1.614C20 15.42 20 14.416 20 13V9c0-.977-.005-1.32-.058-1.585a3 3 0 0 0-2.357-2.357C17.32 5.005 16.977 5 16 5a1 1 0 0 1 0-2",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M12 2a1 1 0 0 1 1 1v10.086l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 13.086V3a1 1 0 0 1 1-1",
          }),
        ],
      }))
);
Save.displayName = "Save";
export { Save };
