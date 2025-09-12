var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FolderPlusFilled = memo(
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
            fillRule: "evenodd",
            d: "M8.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 13.07 6H20a3 3 0 0 1 3 3v5.495h-1.505V14a2.5 2.5 0 0 0-5 0v.495H16a2.5 2.5 0 0 0 0 5h.495V21H5a4 4 0 0 1-4-4V6a3 3 0 0 1 3-3zM4 5a1 1 0 0 0-1 1v4h18V9a1 1 0 0 0-1-1h-6.93a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 8.93 5z",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M18.995 13a1 1 0 0 1 1 1v1.995H22a1 1 0 1 1 0 2h-2.005V20a1 1 0 0 1-2 0v-2.005H16a1 1 0 0 1 0-2h1.995V14a1 1 0 0 1 1-1",
          }),
        ],
      }))
);
FolderPlusFilled.displayName = "FolderPlusFilled";
export { FolderPlusFilled };
export default FolderPlusFilled;
