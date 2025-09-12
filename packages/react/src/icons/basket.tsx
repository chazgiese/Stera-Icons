var _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Basket = memo(
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
            d: "M12 10a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1M6.758 10.03a1 1 0 0 1 1.212.728l1.5 6a1 1 0 1 1-1.94.484l-1.5-6a1 1 0 0 1 .728-1.212M16.03 10.758a1 1 0 1 1 1.94.484l-1.5 6a1 1 0 0 1-1.94-.484z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M11.399 1.701a1 1 0 0 1 1.277.062L18.39 7h.836c.45 0 .854-.001 1.181.028.292.026.62.083.935.247l.134.077.175.125c.393.307.675.737.797 1.225.102.406.047.791-.03 1.116-.076.32-.204.704-.347 1.13l-2.028 6.086c-.366 1.1-.62 1.915-1.137 2.532a4 4 0 0 1-1.604 1.157c-.748.294-1.603.277-2.762.277H9.46c-1.159 0-2.013.017-2.762-.277a4 4 0 0 1-1.604-1.157c-.516-.617-.77-1.433-1.137-2.532L1.93 10.948c-.142-.426-.271-.81-.347-1.13-.077-.325-.132-.71-.03-1.116l.062-.205c.167-.47.487-.874.91-1.144l.134-.078c.315-.164.644-.22.935-.247C3.92 6.998 4.325 7 4.775 7h.835l5.714-5.237zM4.775 9c-.487 0-.785.001-1.002.02a1 1 0 0 0-.185.028.25.25 0 0 0-.092.127c.001.022.007.077.032.183.05.213.144.496.298.958l2.029 6.085c.42 1.262.56 1.627.773 1.882.215.257.491.456.803.578.31.122.7.139 2.03.139h5.08c1.328 0 1.718-.017 2.029-.139s.587-.321.802-.578c.214-.256.353-.62.774-1.882l2.028-6.085c.154-.462.248-.745.298-.958.025-.106.03-.161.031-.183a.25.25 0 0 0-.092-.127 1 1 0 0 0-.183-.028A13 13 0 0 0 19.226 9zM8.57 7h6.858L12 3.856z",
            clipRule: "evenodd",
          }),
        ],
      }))
);
Basket.displayName = "Basket";
export { Basket };
export default Basket;
