var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const ContactBook = memo(
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
            d: "M9.5 7.5a3 3 0 0 0-3 3c0 .979.471 1.845 1.196 2.393a4.07 4.07 0 0 0-2.133 2.256A1 1 0 0 0 6.5 16.5h6a1 1 0 0 0 .937-1.35 4.07 4.07 0 0 0-2.132-2.257A3 3 0 0 0 12.5 10.5a3 3 0 0 0-3-3",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M8.4 3c-1.103 0-1.991-.001-2.709.058-.728.06-1.368.185-1.96.487A5 5 0 0 0 1.544 5.73c-.302.593-.428 1.233-.487 1.961C.999 8.41 1 9.297 1 10.401V13.6c0 1.103-.001 1.991.058 2.709.06.728.185 1.368.487 1.96a5 5 0 0 0 2.185 2.186c.593.302 1.233.428 1.961.487.718.059 1.606.058 2.71.058h8.8c.823 0 1.5.001 2.051-.044.562-.046 1.08-.144 1.564-.392a4 4 0 0 0 1.749-1.748c.247-.485.345-1.002.391-1.564.045-.55.044-1.228.044-2.052V8.8c0-.824.001-1.502-.044-2.052-.046-.562-.144-1.08-.392-1.564a4 4 0 0 0-1.748-1.748c-.485-.248-1.002-.346-1.564-.392C18.702 2.999 18.024 3 17.2 3zM16 19H8.4c-1.136 0-1.929 0-2.546-.05-.605-.05-.953-.143-1.216-.277a3 3 0 0 1-1.31-1.31c-.135-.264-.228-.612-.277-1.218C3 15.53 3 14.736 3 13.6v-3.2c0-1.136 0-1.929.05-2.546.05-.605.143-.953.277-1.216a3 3 0 0 1 1.31-1.31c.264-.135.612-.228 1.217-.277C6.471 5 7.264 5 8.4 5H16zm4.998-3.333c-.001.61-.006 1.059-.035 1.422-.036.438-.101.663-.18.82a2 2 0 0 1-.875.873c-.156.08-.38.145-.82.18-.293.025-.643.031-1.088.034v-3.329zm.002-2h-3v-3.334h3zm-3-8.664c.445.003.795.01 1.089.034.438.036.663.101.82.18a2 2 0 0 1 .873.875c.08.156.145.38.18.82.03.362.035.811.036 1.421H18z",
            clipRule: "evenodd",
          }),
        ],
      }))
);
ContactBook.displayName = "ContactBook";
export { ContactBook };
export default ContactBook;
