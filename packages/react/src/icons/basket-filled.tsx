import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const BasketFilled = memo(
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
          d: "M11.399 1.701a1 1 0 0 1 1.277.062L18.39 7h.836c.45 0 .854-.001 1.181.028.292.026.62.083.935.247l.134.077.175.125c.393.307.675.737.797 1.225.102.406.047.791-.03 1.116-.076.32-.204.704-.347 1.13l-2.028 6.086c-.366 1.1-.62 1.915-1.137 2.532-.43.514-.981.912-1.604 1.157-.748.294-1.603.277-2.762.277H9.46c-1.159 0-2.013.017-2.762-.277a4 4 0 0 1-1.604-1.157c-.516-.617-.77-1.433-1.137-2.532L1.93 10.948c-.142-.426-.271-.81-.347-1.13-.077-.325-.132-.71-.03-1.116l.062-.205c.167-.47.487-.874.91-1.144l.134-.078c.315-.164.644-.22.935-.247C3.92 6.998 4.325 7 4.775 7h.835l5.714-5.237zM12 10a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m-4.53.758a1 1 0 1 0-1.94.484l1.5 6a1 1 0 1 0 1.94-.484zm10.272-.728a1 1 0 0 0-1.212.728l-1.5 6a1 1 0 1 0 1.94.484l1.5-6a1 1 0 0 0-.728-1.212M8.572 7h6.857L12 3.856z",
          clipRule: "evenodd",
        }),
      }))
);
BasketFilled.displayName = "BasketFilled";
export { BasketFilled };
export default BasketFilled;
