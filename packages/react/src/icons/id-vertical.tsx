import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const IdVertical = memo(
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
            d: "M15 5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M13.6 1c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V15.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.521.266-1.08.394-1.703.462q-.27.081-.567.083H8l-.204-.01a2 2 0 0 1-.36-.072c-.624-.068-1.183-.197-1.706-.463a5 5 0 0 1-2.185-2.185c-.302-.593-.428-1.233-.487-1.961C2.999 17.59 3 16.703 3 15.599V8.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 5.73 1.544c.593-.302 1.233-.428 1.961-.487C8.41.999 9.297 1 10.401 1zm-2.754 17.004a3 3 0 0 0-2.842 2.842L8 20.957c.595.04 1.35.043 2.4.043H13.6c1.048 0 1.803-.003 2.398-.043l-.002-.111A3 3 0 0 0 13 18h-2zM10.4 3c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217C5 6.471 5 7.264 5 8.4v7.2c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 .724.918 5 5 0 0 1 2.811-3.802 4 4 0 1 1 6.274 0 5 5 0 0 1 2.811 3.803c.298-.254.546-.566.726-.919.134-.263.227-.611.276-1.216.05-.617.051-1.41.051-2.546V8.4c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216a3 3 0 0 0-1.31-1.31c-.264-.135-.612-.228-1.218-.277C15.53 3 14.736 3 13.6 3zm1.6 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
            clipRule: "evenodd",
          }),
        ],
      }))
);
IdVertical.displayName = "IdVertical";
export { IdVertical };
export default IdVertical;
