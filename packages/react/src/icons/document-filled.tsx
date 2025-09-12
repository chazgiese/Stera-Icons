const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const DocumentFilled = memo(
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
          d: "M13.009 1.001c.291.003.571.012.863.082.306.074.599.195.867.36.326.2.593.475.906.787l4.125 4.125c.312.313.588.58.788.906a3 3 0 0 1 .359.867c.07.292.08.572.082.863l.001.334V15.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H10.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C2.999 17.59 3 16.703 3 15.599V8.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 5.73 1.544c.593-.302 1.233-.428 1.961-.487C8.41.999 9.297 1 10.401 1h2.274zm.454 2.419a.5.5 0 0 0-.462.462L13 3.966V5.8c0 .56 0 .98.027 1.313.028.332.082.58.192.795l.077.138a2 2 0 0 0 .796.735l.166.073c.174.062.376.099.629.12C15.22 9 15.642 9 16.2 9h1.834l.084-.001a.5.5 0 0 0 .462-.462l.001-.084v-.076a1 1 0 0 0-.32-.697l-3.94-3.94-.054-.053a1 1 0 0 0-.72-.268z",
          clipRule: "evenodd",
        }),
      }))
);
DocumentFilled.displayName = "DocumentFilled";
export { DocumentFilled };
export default DocumentFilled;
