const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const NoteFilled = memo(
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
          d: "M14.009 21.999a3.8 3.8 0 0 0 .863-.082c.306-.074.599-.195.867-.36.326-.2.593-.475.906-.787l4.125-4.125c.312-.313.588-.58.788-.906.164-.268.285-.56.359-.867.07-.292.08-.572.082-.863l.001-.334V9.4c0-1.103.001-1.991-.058-2.709-.06-.728-.185-1.368-.487-1.96a5 5 0 0 0-2.185-2.186c-.593-.302-1.233-.428-1.961-.487C16.59 1.999 15.703 2 14.599 2H9.4c-1.103 0-1.991-.001-2.709.058-.728.06-1.368.185-1.96.487A5 5 0 0 0 2.544 4.73c-.302.593-.428 1.233-.487 1.961C1.999 7.41 2 8.297 2 9.401V14.6c0 1.103-.001 1.991.058 2.709.06.728.185 1.368.487 1.96a5 5 0 0 0 2.185 2.186c.593.302 1.233.428 1.961.487.718.059 1.606.058 2.71.058h4.274zm.454-2.419a.5.5 0 0 1-.462-.462L14 19.034V17.2c0-.56 0-.98.027-1.313.028-.332.082-.58.192-.795l.077-.138c.192-.313.467-.568.796-.735l.166-.072c.174-.063.376-.1.629-.12.334-.028.755-.027 1.313-.027h1.834l.084.001a.5.5 0 0 1 .462.462l.001.084v.076a1 1 0 0 1-.32.697l-3.94 3.94-.054.053a1 1 0 0 1-.72.268z",
          clipRule: "evenodd",
        }),
      }))
);
NoteFilled.displayName = "NoteFilled";
export { NoteFilled };
export default NoteFilled;
