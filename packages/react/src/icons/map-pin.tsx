import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const MapPin = memo(
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
            d: "M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 1.001c4.991 0 9 4.132 9 9.182q-.002.6-.104 1.194a9 9 0 0 1-.382 1.47q-.152.435-.34.86-.25.564-.548 1.105c-.797 1.45-1.847 2.818-2.875 3.986a35 35 0 0 1-2.207 2.285c-.375.356-.714.665-1 .918q-.452.402-.922.782a.996.996 0 0 1-1.243 0c-.32-.244-.622-.516-.923-.782a39 39 0 0 1-1.694-1.595 35 35 0 0 1-1.513-1.608c-1.028-1.168-2.078-2.536-2.875-3.985q-.299-.54-.549-1.107a12 12 0 0 1-.339-.86 9 9 0 0 1-.382-1.469A7 7 0 0 1 3 10.183C3 5.133 7.008 1 12 1m0 2c-3.845 0-7 3.194-7 7.182 0 1.13.418 2.38 1.126 3.666.703 1.277 1.653 2.523 2.625 3.628A35 35 0 0 0 12 20.693q.251-.216.577-.511a35 35 0 0 0 2.672-2.705c.972-1.105 1.922-2.35 2.625-3.628.708-1.287 1.126-2.537 1.126-3.666C19 6.195 15.845 3 12 3",
            clipRule: "evenodd",
          }),
        ],
      }))
);
MapPin.displayName = "MapPin";
export { MapPin };
export default MapPin;
