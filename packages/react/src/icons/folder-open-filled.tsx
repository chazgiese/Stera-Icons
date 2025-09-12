const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const FolderOpenFilled = memo(
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
          /*#__PURE__*/ _reactJsxRuntime.jsx("g", {
            clipPath: "url(#a)",
            children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M7.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 12.07 6h7.077a3 3 0 0 1 2.992 2.77l.094 1.23H23a1 1 0 0 1 .994 1.11l-.704 6.331A4 4 0 0 1 19.314 21H4.818a4 4 0 0 1-3.992-3.75L.135 6.188A3 3 0 0 1 3.129 3zM3.129 5a1 1 0 0 0-.998 1.063l.316 5.065A3 3 0 0 1 4.79 10h15.437l-.083-1.077A1 1 0 0 0 19.147 8H12.07a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 7.93 5z",
              clipRule: "evenodd",
            }),
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("defs", {
            children: /*#__PURE__*/ _reactJsxRuntime.jsx("clipPath", {
              id: "a",
              children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
                fill: "currentColor",
                d: "M0 0h24v24H0z",
              }),
            }),
          }),
        ],
      }))
);
FolderOpenFilled.displayName = "FolderOpenFilled";
export { FolderOpenFilled };
